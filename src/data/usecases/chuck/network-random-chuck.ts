import { RandomChuck } from "../../../domain/usecases";
import { Http, HttpClient, HttpError } from "../../protocols";

export class NetworkRandomChuck implements RandomChuck {
  constructor(
    private readonly path: string,
    private readonly httpClient: HttpClient<RandomChuck.Response>
  ) {}

  async random(): Promise<RandomChuck.Response> {
    const url = `${this.path}`;

    const requestResponse = await this.httpClient.request({
      method: "get",
      url,
    });

    if (requestResponse.statusCode !== Http.StatusCode.Ok)
      throw new HttpError(this.path, requestResponse);

    return requestResponse.body!;
  }
}
