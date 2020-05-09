import UserTokens from '../infra/typeorm/entities/UserTokens';

export default interface IUserTokensRepository {
    generate(user_id: string): Promise<UserTokens>;
}
