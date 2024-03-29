export interface AddonInfo {
  author?: string;
  name: string;
  sourcePath: string;
  version: string;
}

export type PackageJsonAddress = {
  email?: string;
  url?: string;
};

export type PackageJsonPerson = PackageJsonAddress & {
  name: string;
};

export type PackageJson = {
  author?: PackageJsonPerson | string;
  bin?: Record<string, string>;
  browser?: string;
  bugs?: PackageJsonAddress;
  bundledDependencies?: string[];
  config?: Record<string, string>;
  contributors?: PackageJsonPerson[] | string[];
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
};
