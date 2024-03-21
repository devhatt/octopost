export interface AddonInfo {
  name: string;
  version: string;
  author?: string;
  sourcePath: string;
}

export type PackageJsonAddress = {
  email?: string;
  url?: string;
};

export type PackageJsonPerson = PackageJsonAddress & {
  name: string;
};

export type PackageJson = {
  name: string;
  version: string;
  main: string;
  description?: string;
  keywords?: string;
  homepage?: string;
  bugs?: PackageJsonAddress;
  license?: string;
  author?: string | PackageJsonPerson;
  contributors?: string[] | PackageJsonPerson[];
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
};
