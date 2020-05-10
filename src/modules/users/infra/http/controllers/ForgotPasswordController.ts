import { Request, Response } from 'express';
import { container } from 'tsyringe';

import SendForgotPasswordEmailService from '@modules/users/services/SendForgotPasswordEmailService';

export default class ForgotPasswordControler {
    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { email } = request.body;

        const sendForgotPasswordEmail = container.resolve(
            SendForgotPasswordEmailService,
        );

        try {
            await sendForgotPasswordEmail.execute({
                email,
            });
        } catch (e) {
            console.log(e);
        }

        return response.status(204).json();
    }
}
