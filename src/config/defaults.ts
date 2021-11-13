import { Dictionary } from "../helpers.js";

export interface IconSize {
  readonly width: number;
  readonly height: number;
}

export interface IconOptions {
  readonly sizes: IconSize[];
  readonly offset?: number;
  readonly background?: string | boolean;
  readonly transparent: boolean;
  readonly rotate: boolean;
  readonly purpose?: string;
  readonly pixelArt?: boolean;
}

export interface FileOptions {
  readonly manifestFileName?: string;
}

export interface Application {
  readonly platform?: string;
  readonly url?: string;
  readonly id?: string;
}

export interface OutputOptions {
  readonly images?: boolean;
  readonly files?: boolean;
  readonly html?: boolean;
}

export interface FaviconOptions {
  readonly path?: string;
  readonly appName?: string;
  readonly appShortName?: string;
  readonly appDescription?: string;
  readonly developerName?: string;
  readonly developerURL?: string;
  readonly dir?: string;
  readonly lang?: string;
  readonly background?: string;
  readonly theme_color?: string;
  readonly appleStatusBarStyle?: string;
  readonly display?: string;
  readonly orientation?: string;
  readonly scope?: string;
  readonly start_url?: string;
  readonly version?: string;
  readonly logging?: boolean;
  readonly pixel_art?: boolean;
  readonly loadManifestWithCredentials?: boolean;
  readonly manifestRelativePaths?: boolean;
  readonly manifestMaskable?: boolean;
  readonly preferRelatedApplications?: boolean;
  readonly relatedApplications?: Application[];
  readonly icons?: Dictionary<IconOptions | boolean | string[]>;
  readonly files?: Dictionary<FileOptions>;
  readonly output?: OutputOptions;
}

export const defaultOptions: FaviconOptions = {
  path: "/",
  appName: null,
  appShortName: null,
  appDescription: null,
  developerName: null,
  developerURL: null,
  dir: "auto",
  lang: "en-US",
  background: "#fff",
  theme_color: "#fff",
  appleStatusBarStyle: "black-translucent",
  display: "standalone",
  orientation: "any",
  start_url: "/?homescreen=1",
  version: "1.0",
  logging: false,
  pixel_art: false,
  loadManifestWithCredentials: false,
  manifestRelativePaths: false,
  manifestMaskable: false,
  preferRelatedApplications: false,
  icons: {
    android: true,
    appleIcon: true,
    appleStartup: true,
    favicons: true,
    windows: true,
    yandex: true,
  },
  output: {
    images: true,
    files: true,
    html: true,
  },
};
