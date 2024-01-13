import { ExampleModule1 } from 'modules/example-module1/example-module1';

export type TSocialNetworks = Omit<ExampleModule1, 'services'> & { id: string };

export type TSocialNetworksState = {
  socialNetworks: TSocialNetworks[];
};
