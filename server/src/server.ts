// const express = require('express) - Padrão //
import express, { request, response } from 'express' // ECMAScript Modules //
// Prisma Client //
import { PrismaClient } from '@prisma/client'
import cors from 'cors'

const app = express()

app.use(express.json()) // Entender JSON //
app.use(cors()) // Proteger aplicação contra acessos indevidos de um front-end //

const prisma = new PrismaClient({
    log: ['query']
})

// ROTAS //
app.get('/games', async (request, response) => {
    try {
        const games = await prisma.game.findMany({
            include: {
                _count: {
                    select: {
                        Ads: true
                    }
                }
            }
        })

        return response.status(200).json(games)
    } catch {
        return response.status(500).json({ message: "Erro interno" })
    }
})

app.post('/games/:id/ads', async (request, response) => {
    const gameId = request.params.id
    const body = request.body

    // Utils - Formatar Hora //
    // Parei 1:29:35 - stage 3//

    const data = {
        gameId,
        ...body,
        weekDays: body.weekDays.join(','),
    }

    const ad = await prisma.ads.create({
        data
    })


    return response.status(204).json(ad)
})

app.get('/games/:id/ads', async (request, response) => {
    const gameId = request.params.id

    const ads = await prisma.ads.findMany({
        select: {
            id: true,
            name: true,
            weekDays: true,
            useVoiceChannel: true,
            yearsPlaying: true,
            hourStart: true,
            hourEnd: true,
        },
        where: {
            gameId
        },
        orderBy: {
            createdAt: 'desc'
        }
    })

    return response.status(200).json(ads.map(ad => {
        return {
            ...ad,
            weekDays: ad.weekDays.split(',')
        }
    }))
})

app.get('/ads/:id/discord', async (request, response) => {
    const adId = request.params.id

    const ad = await prisma.ads.findUniqueOrThrow({
        select: {
            discord: true
        },
        where: {
            id: adId
        }
    })

    return response.status(200).json({ discord: ad.discord })
})

// localhost:3333 //
app.listen(3333)