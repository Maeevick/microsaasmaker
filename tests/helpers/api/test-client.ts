import { IncomingMessage, ServerResponse, createServer } from "http"
import { NextApiHandler } from "next"
import { apiResolver } from "next/dist/server/api-utils/node"
import supertest from "supertest"

export const testClientHelper = (handler: NextApiHandler) => {
    const serverRequestListener = async (req: IncomingMessage, res: ServerResponse) => {
        const apiContext = {
            previewModeId: '',
            previewModeEncryptionKey: '',
            previewModeSigningKey: '',
        }

        return apiResolver(req, res, undefined, handler, apiContext, true, true)
    }
    return supertest(createServer(serverRequestListener))
}