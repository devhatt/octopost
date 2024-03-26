import { OctoModule } from '@octopost/module-manager';

export type TSocialNetworks = Omit<OctoModule, 'services'> & { id: string };

export type TSocialNetworksState = {
  socialNetworks: TSocialNetworks[];
};
