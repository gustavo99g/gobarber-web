import { fetchClient } from "@/utils/fetch";
import { User } from "./user";


interface GetProvidersResponse extends Omit<User, 'email'> {}
interface GetDayAvailabilityResponse {
  morning:Array<{
    hour: number;
  available: boolean;
  }>
  afternoon:Array<{
    hour: number;
  available: boolean;
  }>
  
}


interface GetMonthAvailabilityResponse {
  day: Date;
  available: boolean;
}


const getProviders = async() : Promise<GetProvidersResponse[]>=>{
  const res = await fetchClient('/users/providers', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
  });
return res

}


const getDayAvailability = async(day:string, providerId:string):Promise<GetDayAvailabilityResponse> => {
    const res = await fetchClient(`/appointments/day-availability?day=${day}&provider_id=${providerId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return res
}

const getMonthAvailability = async(day:string, providerId:string):Promise<GetMonthAvailabilityResponse[]> => {
  const res = await fetchClient(`/appointments/month-availability?month=${day}&provider_id=${providerId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res
}


interface CreateAppointmentPayload {
  date: string;
  provider_id: string;

}


const createAppointment = async (payload: CreateAppointmentPayload) => {
    const res = await fetchClient('/appointments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    return res
}

export {getProviders,getDayAvailability,getMonthAvailability,createAppointment}