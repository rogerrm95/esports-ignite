import { Envelope } from 'phosphor-react'
// Components //
import { Input } from './Input'
import { TextArea } from './TextArea'
// Validation //
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, FormProvider } from 'react-hook-form'
import { Select } from '../../components/Form/Select'
// Utils //
import { typeOfContact } from '../../utils/typeOfContact'
import { ErrorMessage } from '../ErrorMessage'
import { useState } from 'react'

const messageUserSchema = z.object({
    name: z.string().min(2, { message: "Digitar ao menos 2 letras" }),
    email: z.string().email({ message: "Por favor, informar um e-mail válido!" }),
})

type MessageUserSchemaProps = z.infer<typeof messageUserSchema>

const MAX_CARACTER = 500 // Máximo de caracteres permitidos na mensagem //

export function ContactUsForm() {
    const methods = useForm<MessageUserSchemaProps>({
        resolver: zodResolver(messageUserSchema)
    })

    const { formState: { errors, isValid, isSubmitted }, register, handleSubmit, reset } = methods

    // DATA //
    const [categoryContact, setCategoryContact] = useState('')
    const [message, setMessage] = useState('')

    // VARIAVEL AUXILIAR //
    const isFormIsValid = isValid && message.length > 0 && categoryContact
    const quantityOfCaracter = MAX_CARACTER - message.length

    // FUNÇÃO RESPONSÁVEL POR CAPTURAR OS DADOS DOS FORMULÁRIOS E ENVIAR PARA O BACK-END //
    // PENDENTE A SER IMPLEMENTADO (v 3.0) //
    async function handleSendMessage(data: MessageUserSchemaProps) {
        const userMessage = {
            ...data,
            category: categoryContact,
            message
        }

        console.log(userMessage)

        alert("Muito obrigado pelo contato, e-mail enviado com sucesso")
        location.reload()
    }

    return (
        <div className='flex flex-col gap-6 p-6'>
            <h2 className='bg-gradient-to-r from-[#9572FC] via-[#43E7AD] to-[#E1D55D] bg-clip-text text-transparent font-semibold text-4xl text-center font-landing-page leading-relaxed'>
                Fale Conosco
            </h2>

            <p className='text-zinc-300 text-justify leading-relaxed w-[100%] sm:w-[85%] lg:sm:w-[75%]'>
                Caso queira nos contactar,
                por favor preencha o formulário abaixo que entraremos em contato atraves do e-mail enviado.
            </p>

            <FormProvider {...methods}>
                <form className='flex flex-col gap-4' onSubmit={handleSubmit(handleSendMessage)}>
                    <Input.Root>
                        <Input.Label htmlFor="name">Nome completo</Input.Label>
                        <Input.Field
                            id='name'
                            placeholder='Seu nome completo...'
                            name='name'
                        />
                        {errors.name && <ErrorMessage message={errors.name.message} />}
                    </Input.Root>

                    <Input.Root>
                        <Input.Label htmlFor="email">E-mail</Input.Label>
                        <Input.Field
                            id='email'
                            placeholder='johndoe@example.com.br'
                            type='email'
                            name='email'
                        />
                        {errors.email && <ErrorMessage message={errors.email.message} />}
                    </Input.Root>

                    <div className='flex flex-col gap-2 text-zinc-500'>
                        <label htmlFor="email">Motivo do contato</label>
                        <Select
                            label='Selecionar uma categoria'
                            options={typeOfContact}
                            placeholder='Selecionar uma categoria...'
                            name='type'
                            value={categoryContact}
                            onSelectedChange={(option) => setCategoryContact(option)}
                        />
                        {(!categoryContact && isSubmitted) && <ErrorMessage message='Campo vazio, por favor preenche-lo!' />}
                    </div>

                    <TextArea.Root>
                        <TextArea.Label>
                            Mensagem

                            <span className='text-xs font-normal text-zinc-500 mt-auto'>
                                Caracteres: {quantityOfCaracter}
                            </span>
                        </TextArea.Label>

                        <TextArea.Field
                            placeholder='Conte-nos o motivo da sua mensagem aqui ...'
                            maxLength={500}
                            onChange={(e) => setMessage(e.target.value)} />

                        {(message.length === 0 && isSubmitted) && <ErrorMessage message='Campo vazio, por favor preenche-lo!' />}
                    </TextArea.Root>

                    <button
                        className='bg-violet-500 hover:bg-violet-600 transition-colors text-white font-semibold flex items-center justify-center gap-3 px-3 py-3 mt-4 mb-8 lg:mb-0 rounded disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-violet-500'
                        disabled={!isFormIsValid}
                    >
                        <Envelope size={24} />
                        Enviar
                    </button>
                </form>
            </FormProvider>
        </div>
    )
}