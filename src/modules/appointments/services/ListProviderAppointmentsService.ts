import { injectable, inject } from 'tsyringe';

import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';
import IAppointmentsRepository from '../repositories/IAppointmentsRepository';
import Appointment from '../infra/typeorm/entities/Appointment';

interface IRequest {
    provider_id: string;
    day: number;
    month: number;
    year: number;
}

@injectable()
class ListProviderAppointmentsService {
    constructor(
        @inject('AppointmentsRepository')
        private appointmentsRepository: IAppointmentsRepository,

        @inject('CacheProvider')
        private cacheProvider: ICacheProvider,
    ) { }

    public async execute({
        provider_id,
        month,
        year,
        day,
    }: IRequest): Promise<Appointment[]> {
        const cacheData = await this.cacheProvider.recovery('asd');

        console.log(cacheData);

        const appointments = await this.appointmentsRepository.findAllInDayFromProvider(
            {
                provider_id,
                month,
                year,
                day,
            },
        );

        // await this.cacheProvider.save('asd', 'asd');

        return appointments;
    }
}

export default ListProviderAppointmentsService;
