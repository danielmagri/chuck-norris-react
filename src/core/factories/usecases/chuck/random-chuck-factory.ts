import { NetworkRandomChuck } from "../../../../data/usecases/chuck/network-random-chuck";
import { RandomChuck } from "../../../../domain/usecases";
import { makeHttpEndpoint, makeHttpClientAdapter } from  '../../infras'
import { endpoints } from  '../../../config'

export const makeRandomChuck = (): RandomChuck => {
	return new NetworkRandomChuck(
		makeHttpEndpoint(endpoints.randomChuck),
		makeHttpClientAdapter()
	);
};