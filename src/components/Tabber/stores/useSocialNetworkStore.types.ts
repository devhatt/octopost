import { OctoModule } from '@octopost/module-manager';

export type TSocialNetworks = Omit<OctoModule, 'services'> & { id: string };

export interface TSocialNetworksState {
  socialNetworks: TSocialNetworks[];
}
