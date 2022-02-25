import { HomePage } from "../../../presentation/home";
import { makeRandomChuck } from "../usecases/chuck";

export const makeHomePage = (): JSX.Element => {
  return <HomePage randomChuck={makeRandomChuck()} />;
};
