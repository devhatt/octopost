export interface IPackageJsonAddress {
  email?: string;
  url?: string;
}

export interface IPackageJsonPerson extends IPackageJsonAddress {
  name: string;
}

export interface IPackageJson {
  name: string;
  version: string;
  main: string;
  description?: string;
  keywords?: string;
  homepage?: string;
  bugs?: IPackageJsonAddress;
  license?: string;
  author?: string | IPackageJsonPerson;
  contributors?: string[] | IPackageJsonPerson[];
  files?: string[];
  browser?: string;
  bin?: Record<string, string>;
  man?: string;
  directories?: {
    lib?: string;
    bin?: string;
    man?: string;
    doc?: string;
    example?: string;
    test?: string;
  };
  repository?: {
    type?: 'git' | string;
    url?: string;
    directory?: string;
  };
  scripts?: Record<string, string>;
  config?: Record<string, string>;
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
  peerDependencies?: Record<string, string>;
  optionalDependencies?: Record<string, string>;
  bundledDependencies?: string[];
  engines?: Record<string, string>;
  os?: string[];
  cpu?: string[];
}

export interface IPluginMetadata {
  name: string;
  version: string;
  author?: string | IPackageJsonPerson;
  repositoryURL?: string;
  sourcePath: string;
}
