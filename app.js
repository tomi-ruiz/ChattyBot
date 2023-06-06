const { createBot, createProvider, createFlow, addKeyword} = require('@bot-whatsapp/bot')
const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')


const flowAsesor = addKeyword(['2', 'asesor']).addAnswer(['⏳ En unos instantes un asesor se pondra en contacto contigo..'], {capture:false}, (ctx, {endFlow}) => {
    return endFlow({body: '❌ Bot Finalizado ❌'})
})

const flowOpcion11 = addKeyword(['opcion11']).addAnswer(['📝Esta es la opcion 11'])
.addAnswer([
    '✅ *1* Volver a menú principal',
    '👤 *2* Comunicarse con un asesor'], 
    {capture:true}, (ctx, {gotoFlow, fallBack}) => {
        if(ctx.body == 1){
            return gotoFlow(flowMenu)
        }
        if(ctx.body == 2){
            return gotoFlow(flowAsesor)
        }
        if(ctx.body != 1 & ctx.body != 2){
            return fallBack('❗RESPUESTA INCORRECTA❗ \n ✅ *1* Volver a menú principal \n 👤 *2* Comunicarse con un asesor')
        }
    }
)

const flowOpcion1 = addKeyword(['1']).addAnswer(
    ['📌Esta es la opcion 1']
)
.addAnswer('Imagen', {
  media: 'https://educacion30.b-cdn.net/wp-content/uploads/2019/06/homer.gif',
})
.addAnswer(
    ['Descripcion de la imagen']
)
.addAnswer([
    '📆 *1* Opcion 11',
    '✅ *2* Volver a menú principal',
    '👤 *3* Comunicarse con un asesor'], 
    {capture:true}, (ctx, {gotoFlow, fallBack}) => {
        if(ctx.body == 1){
            return gotoFlow(flowOpcion11)
        }
        if(ctx.body == 2){
            return gotoFlow(flowMenu)
        }
        if(ctx.body == 3){
            return gotoFlow(flowAsesor)
        }
        if(ctx.body != 1 & ctx.body != 2 & ctx.body != 3){
            return fallBack('❗RESPUESTA INCORRECTA❗ \n ✅ *1* Volver a menú principal \n 👤 *2* Comunicarse con un asesor \n 📆 *1* Opcion 1.1')
        }
    }
)


const flowOpcion2 = addKeyword(['2']).addAnswer(
    ['📌Esta es la opcion 2'])
    .addAnswer([
        '✅ *1* Volver a menú principal',
        '👤 *2* Comunicarse con un asesor'], 
        {capture:true}, (ctx, {gotoFlow, fallBack}) => {
            if(ctx.body == 1){
                return gotoFlow(flowMenu)
            }
            if(ctx.body == 2){
                return gotoFlow(flowAsesor)
            }
            if(ctx.body != 1 & ctx.body != 2){
                return fallBack('❗RESPUESTA INCORRECTA❗ \n ✅ *1* Volver a menú principal \n 👤 *2* Comunicarse con un asesor')
            }
        }
)


const flowOpcion3 = addKeyword(['3']).addAnswer(
    ['📌Esta es la opcion 3'])
    .addAnswer([
        '✅ *1* Volver a menú principal',
        '👤 *2* Comunicarse con un asesor'], 
        {capture:true}, (ctx, {gotoFlow, fallBack}) => {
            if(ctx.body == 1){
                return gotoFlow(flowMenu)
            }
            if(ctx.body == 2){
                return gotoFlow(flowAsesor)
            }
            if(ctx.body != 1 & ctx.body != 2){
                return fallBack('❗RESPUESTA INCORRECTA❗ \n ✅ *1* Volver a menú principal \n 👤 *2* Comunicarse con un asesor')
            }
        }
)

const flowOpcion4 = addKeyword(['4']).addAnswer(
    '📌Esta es la opcion 4')
    .addAnswer([
        '✅ *1* Volver a menú principal',
        '👤 *2* Comunicarse con un asesor'], 
        {capture:true}, (ctx, {gotoFlow, fallBack}) => {
            if(ctx.body == 1){
                return gotoFlow(flowMenu)
            }
            if(ctx.body == 2){
                return gotoFlow(flowAsesor)
            }
            if(ctx.body != 1 & ctx.body != 2){
                return fallBack('❗RESPUESTA INCORRECTA❗ \n ✅ *1* Volver a menú principal \n 👤 *2* Comunicarse con un asesor')
            }
        }
)

const flowMenu = addKeyword("menu")
    .addAnswer(
        [
            'MENU PRINCIPAL🙌',
            'Selecciona una opcion numérica de la lista:',
            '📌 *1* Opcion1',
            '📌 *2* Opcion2',
            '📌 *3* Opcion3',
            '📌 *4* Opcion4',
        ],
        {capture:true}, (ctx, {gotoFlow, fallBack}) => {
            console.log('La opcion ingresada de menu es: ', ctx.body)
            if(ctx.body == 1){
                return gotoFlow(flowOpcion1)
            }
            if(ctx.body == 2){
                return gotoFlow(flowOpcion2)
            }
            if(ctx.body == 3){
                return gotoFlow(flowOpcion3)
            }
            if(ctx.body == 4){
                return gotoFlow(flowOpcion4)
            }
            if(ctx.body != 1 & ctx.body != 2 & ctx.body != 3 & ctx.body != 4){
                return fallBack('❗RESPUESTA INCORRECTA❗ \n Selecciona una opcion numérica de la lista: \n 📌 *1* Opcion1 \n 📌 *2* Opcion2 \n 📌 *3* Opcion3 \n 📌 *4* Opcion4')
            }
    }
    )

const flowPrincipal = addKeyword(["hola", "buenas"])
    .addAnswer('Hola bienvenido al Bot🙌')
    .addAnswer(
        [
            'Selecciona una opcion numérica de la lista:',
            '📌 *1* Opcion1',
            '📌 *2* Opcion2',
            '📌 *3* Opcion3',
            '📌 *4* Opcion4',
        ],
        {capture:true}, (ctx, {fallBack}) => {
        if (ctx.body != 1 & ctx.body != 2 & ctx.body != 3 & ctx.body != 4){
            return fallBack('❗RESPUESTA INCORRECTA❗ \n Selecciona una opcion numérica de la lista: \n 📌 *1* Opcion1 \n 📌 *2* Opcion2 \n 📌 *3* Opcion3 \n 📌 *4* Opcion4')
        }
        console.log('La opcion ingresada es: ', ctx.body)
    }, [flowOpcion1, flowOpcion2, flowOpcion3, flowOpcion4, flowOpcion11, flowMenu]
    )

const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
