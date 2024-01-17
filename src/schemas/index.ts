import z from 'zod'

export const formSchema = z.object({
    name: z.string({ required_error: 'name is required'}),
    year: z.number({ required_error: 'year is required'}),
    roll: z.number({ required_error: 'roll is required'}),
    kiitMail: z.string().email(),
    personalMail: z.string({ required_error: 'personal mail is required'}).email(),
    phone: z.number({ required_error: 'phone number is required'}).min(10, {message: "invalid phone number"}),
    domain: z.string(),
    optPW: z.boolean(),
})