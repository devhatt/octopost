export interface IPluginMetadata {
  name: string;
  main: string;
  version: string;
  author?: string;
  repository?: IPluginRepository;
}

interface IPluginRepository {
  type: string;
  url: string;
}
