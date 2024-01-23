export interface IPackageJsonAddress {
  email?: string;
  url?: string;
}

export interface IPackageJsonPerson extends IPackageJsonAddress {
  name: string;
}

export interface IPackageJson {
  author?: IPackageJsonPerson | string;
  bin?: Record<string, string>;
  browser?: string;
  bugs?: IPackageJsonAddress;
  bundledDependencies?: string[];
  config?: Record<string, string>;
  contributors?: IPackageJsonPerson[] | string[];
  cpu?: string[];
  dependencies?: Record<string, string>;
  description?: string;
  devDependencies?: Record<string, string>;
  directories?: {
    bin?: string;
    doc?: string;
    example?: string;
    lib?: string;
    man?: string;
    test?: string;
  };
  engines?: Record<string, string>;
  files?: string[];
  homepage?: string;
  keywords?: string;
  license?: string;
  main: string;
  man?: string;
  name: string;
  optionalDependencies?: Record<string, string>;
  os?: string[];
  peerDependencies?: Record<string, string>;
  repository?: {
    directory?: string;
    type?: 'git' | string;
    url?: string;
  };
  scripts?: Record<string, string>;
  version: string;
}

export interface IPluginMetadata {
  author?: IPackageJsonPerson | string;
  name: string;
  repositoryURL?: string;
  sourcePath: string;
  version: string;
}
