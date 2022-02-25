import { env } from '../../../config';

export const makeHttpEndpoint = (path: string): string => {
	return `${env.apiUrl}${path}`;
};
