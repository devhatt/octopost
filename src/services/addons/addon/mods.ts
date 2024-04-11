import { Icon } from '~components/Icon/Icon';

import { OctoModule } from './OctoModule';

// Vem do alvaro
// type AddonsService = {
//   method: 'authenticate' | 'publish' | 'upload' | 'validate'; // Metodos do back
//   moduleId: string;
//   postType: string;
//   text: string;
//   userData: GenericObject;
// };

type Status = {
  message: string;
  status: 'error' | 'success';
};

// type AddonsService = {
//   // add: () => Status;
//   getAll: () => Promise<OctoModule[]>;
// };

export class ModsService {
  public static async authenticate(moduleId: string): Promise<any> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          moduleId: moduleId,
          token: '74vv7v276231gfbywf',
          userId: '8rfb37fgv6b21y',
        });
      }, 1000); // 1 second delay
    });
  }

  public static async getAll(): Promise<OctoModule[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            icon: 'Icon',
            id: 'DISCORD_EXAMPLE_ID',
            name: 'Discord',
            postModes: [
              {
                name: 'Teste',
                previewComponent: 'Teste',
                validators: {
                  text: {
                    maxLength: 3,
                  },
                },
                widgets: [
                  {
                    component: 'Teste',
                    icon: 'Teste',
                    name: 'Teste',
                  },
                ],
              },
            ],
          },
          {
            icon: 'Icon',
            id: 'TWITTER_EXAMPLE_ID',
            name: 'Twitter',
            postModes: [
              {
                name: 'Teste',
                previewComponent: 'Teste',
                validators: {
                  text: {
                    maxLength: 3,
                  },
                },
                widgets: [
                  {
                    component: 'Teste',
                    icon: 'Teste',
                    name: 'Teste',
                  },
                ],
              },
            ],
          },
        ]);
      }, 1000); // 1 second delay
    });
  }
}
