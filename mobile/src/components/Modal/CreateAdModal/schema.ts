// Validation //
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

// Regex //
const discordRegex = new RegExp('^.{3,32}#[0-9]{4}$')

const newAdFormSchema = z.object({
    username: z.string().min(2, { message: "Campo Nome requer ao menos 2 letras" }),
    yearsPlaying: z.string().min(1, { message: "Necessário preenchimento" }).max(2, { message: "Valor menor que 100" }),
    discord: z.string().regex(discordRegex, { message: 'Padrão nome#0000' }),
})

type NewAdFormInputs = z.infer<typeof newAdFormSchema>

export { NewAdFormInputs, newAdFormSchema }