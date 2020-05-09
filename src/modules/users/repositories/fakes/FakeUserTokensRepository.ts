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
        });

        this.userTokens.push(userTokens);

        return userTokens;
    }
}

export default FakeUserTokensRepository;
