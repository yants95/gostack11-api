import { uuid } from 'uuidv4';

import UserTokens from '@modules/users/infra/typeorm/entities/UserTokens';
import IUserTokenssRepository from '../IUserTokensRepository';

class FakeUserTokensRepository implements IUserTokenssRepository {
    private userTokens: UserTokens[] = [];

    public async generate(user_id: string): Promise<UserTokens> {
        const userTokens = new UserTokens();

        Object.assign(userTokens, {
            id: uuid(),
            token: uuid(),
            user_id,
            created_at: new Date(),
            udated_at: new Date(),
        });

        this.userTokens.push(userTokens);

        return userTokens;
    }

    public async findByToken(token: string): Promise<UserTokens | undefined> {
        const userToken = this.userTokens.find(
            findToken => findToken.token === token,
        );

        return userToken;
    }
}

export default FakeUserTokensRepository;
