import alias from '@rollup/plugin-alias';
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import postcss from 'rollup-plugin-postcss';
import terser from '@rollup/plugin-terser';

import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

import pkg from './package.json' with { type: 'json' };

const __dirname = path.dirname(fileURLToPath(import.meta.url));

let entries = [];

let core = {};

const NPM_LINK = process.env.NPM_LINK === 'true';

// alias entries
const ALIAS_ICON_COMPONENT_ENTRIES = [
    { find: '../../iconbase/IconBase', replacement: '@wawjs/react-prime/iconbase' },
    { find: '../icons/angledoubledown', replacement: '@wawjs/react-prime/icons/angledoubledown' },
    { find: '../icons/angledoubleleft', replacement: '@wawjs/react-prime/icons/angledoubleleft' },
    { find: '../icons/angledoubleright', replacement: '@wawjs/react-prime/icons/angledoubleright' },
    { find: '../icons/angledoubleup', replacement: '@wawjs/react-prime/icons/angledoubleup' },
    { find: '../icons/angledown', replacement: '@wawjs/react-prime/icons/angledown' },
    { find: '../icons/angleleft', replacement: '@wawjs/react-prime/icons/angleleft' },
    { find: '../icons/angleright', replacement: '@wawjs/react-prime/icons/angleright' },
    { find: '../icons/angleup', replacement: '@wawjs/react-prime/icons/angleup' },
    { find: '../icons/arrowdown', replacement: '@wawjs/react-prime/icons/arrowdown' },
    { find: '../icons/arrowup', replacement: '@wawjs/react-prime/icons/arrowup' },
    { find: '../icons/ban', replacement: '@wawjs/react-prime/icons/ban' },
    { find: '../icons/bars', replacement: '@wawjs/react-prime/icons/bars' },
    { find: '../icons/calendar', replacement: '@wawjs/react-prime/icons/calendar' },
    { find: '../icons/check', replacement: '@wawjs/react-prime/icons/check' },
    { find: '../icons/chevrondown', replacement: '@wawjs/react-prime/icons/chevrondown' },
    { find: '../icons/chevronleft', replacement: '@wawjs/react-prime/icons/chevronleft' },
    { find: '../icons/chevronright', replacement: '@wawjs/react-prime/icons/chevronright' },
    { find: '../icons/chevronup', replacement: '@wawjs/react-prime/icons/chevronup' },
    { find: '../icons/exclamationtriangle', replacement: '@wawjs/react-prime/icons/exclamationtriangle' },
    { find: '../icons/eye', replacement: '@wawjs/react-prime/icons/eye' },
    { find: '../icons/eyeslash', replacement: '@wawjs/react-prime/icons/eyeslash' },
    { find: '../icons/filter', replacement: '@wawjs/react-prime/icons/filter' },
    { find: '../icons/filterslash', replacement: '@wawjs/react-prime/icons/filterslash' },
    { find: '../icons/infocircle', replacement: '@wawjs/react-prime/icons/infocircle' },
    { find: '../icons/minus', replacement: '@wawjs/react-prime/icons/minus' },
    { find: '../icons/pencil', replacement: '@wawjs/react-prime/icons/pencil' },
    { find: '../icons/plus', replacement: '@wawjs/react-prime/icons/plus' },
    { find: '../icons/refresh', replacement: '@wawjs/react-prime/icons/refresh' },
    { find: '../icons/search', replacement: '@wawjs/react-prime/icons/search' },
    { find: '../icons/searchminus', replacement: '@wawjs/react-prime/icons/searchminus' },
    { find: '../icons/searchplus', replacement: '@wawjs/react-prime/icons/searchplus' },
    { find: '../icons/sortalt', replacement: '@wawjs/react-prime/icons/sortalt' },
    { find: '../icons/sortamountdown', replacement: '@wawjs/react-prime/icons/sortamountdown' },
    { find: '../icons/sortamountupalt', replacement: '@wawjs/react-prime/icons/sortamountupalt' },
    { find: '../icons/spinner', replacement: '@wawjs/react-prime/icons/spinner' },
    { find: '../icons/star', replacement: '@wawjs/react-prime/icons/star' },
    { find: '../icons/starfill', replacement: '@wawjs/react-prime/icons/starfill' },
    { find: '../icons/thlarge', replacement: '@wawjs/react-prime/icons/thlarge' },
    { find: '../icons/times', replacement: '@wawjs/react-prime/icons/times' },
    { find: '../icons/timescircle', replacement: '@wawjs/react-prime/icons/timescircle' },
    { find: '../icons/trash', replacement: '@wawjs/react-prime/icons/trash' },
    { find: '../icons/undo', replacement: '@wawjs/react-prime/icons/undo' },
    { find: '../icons/upload', replacement: '@wawjs/react-prime/icons/upload' },
    { find: '../icons/windowmaximize', replacement: '@wawjs/react-prime/icons/windowmaximize' },
    { find: '../icons/windowminimize', replacement: '@wawjs/react-prime/icons/windowminimize' }
];

const CORE_PASSTHROUGH_DEPENDENCIES = [
    { find: '../passthrough', replacement: '@wawjs/react-prime/passthrough' },
    { find: '../passthrough/tailwind', replacement: '@wawjs/react-prime/passthrough/tailwind' }
];

const ALIAS_COMPONENT_ENTRIES = [
    { find: '../utils/Utils', replacement: '@wawjs/react-prime/utils' },
    { find: '../api/Api', replacement: '@wawjs/react-prime/api' },
    { find: '../componentbase/ComponentBase', replacement: '@wawjs/react-prime/componentbase' },
    { find: '../hooks/Hooks', replacement: '@wawjs/react-prime/hooks' },
    { find: '../ripple/Ripple', replacement: '@wawjs/react-prime/ripple' },
    { find: '../csstransition/CSSTransition', replacement: '@wawjs/react-prime/csstransition' },
    { find: '../portal/Portal', replacement: '@wawjs/react-prime/portal' },
    { find: '../keyfilter/KeyFilter', replacement: '@wawjs/react-prime/keyfilter' },
    ...ALIAS_ICON_COMPONENT_ENTRIES,
    { find: '../tooltip/Tooltip', replacement: '@wawjs/react-prime/tooltip' },
    { find: '../virtualscroller/VirtualScroller', replacement: '@wawjs/react-prime/virtualscroller' },
    { find: '../terminalservice/TerminalService', replacement: '@wawjs/react-prime/terminalservice' },
    { find: '../overlayservice/OverlayService', replacement: '@wawjs/react-prime/overlayservice' },
    { find: '../checkox/Checkbox', replacement: '@wawjs/react-prime/checkbox' },
    { find: '../button/Button', replacement: '@wawjs/react-prime/button' },
    { find: '../inputtext/InputText', replacement: '@wawjs/react-prime/inputtext' },
    { find: '../inputnumber/InputNumber', replacement: '@wawjs/react-prime/inputnumber' },
    { find: '../messages/Messages', replacement: '@wawjs/react-prime/messages' },
    { find: '../progressbar/ProgressBar', replacement: '@wawjs/react-prime/progressbar' },
    { find: '../dropdown/Dropdown', replacement: '@wawjs/react-prime/dropdown' },
    { find: '../dialog/Dialog', replacement: '@wawjs/react-prime/dialog' },
    { find: '../paginator/Paginator', replacement: '@wawjs/react-prime/paginator' },
    { find: '../tree/Tree', replacement: '@wawjs/react-prime/tree' },
    ...CORE_PASSTHROUGH_DEPENDENCIES
];

// dependencies
const GLOBAL_DEPENDENCIES = {
    react: 'React',
    'react-dom': 'ReactDOM',
    'react-transition-group': 'ReactTransitionGroup'
};

const GLOBAL_COMPONENT_DEPENDENCIES = {
    ...GLOBAL_DEPENDENCIES,
    ...(NPM_LINK ? [] : ALIAS_COMPONENT_ENTRIES.reduce((acc, cur) => ({ ...acc, [cur.replacement]: cur.replacement.replace(/^@/, '').replaceAll('/', '.').replaceAll('-', '_') }), {}))
};

// externals
const EXTERNAL = ['react', 'react-dom', 'react-transition-group', '@babel/runtime', '@fullcalendar/core', 'chart.js/auto', 'quill'];

const EXTERNAL_COMPONENT = [...EXTERNAL, ...(NPM_LINK ? [] : ALIAS_COMPONENT_ENTRIES.map((entries) => entries.replacement))];

// plugins
const BABEL_PLUGIN_OPTIONS = {
    exclude: 'node_modules/**',
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: ['@babel/plugin-transform-runtime', '@babel/plugin-proposal-class-properties'],
    skipPreflightCheck: true,
    babelHelpers: 'runtime',
    babelrc: false
};

const ALIAS_PLUGIN_OPTIONS_FOR_COMPONENT = {
    entries: ALIAS_COMPONENT_ENTRIES
};

const REPLACE_PLUGIN_OPTIONS = {
    'process.env.NODE_ENV': JSON.stringify('production'),
    preventAssignment: true
};

const RESOLVE_PLUGIN_OPTIONS = {
    extensions: ['.js']
};

const COMMONJS_PLUGIN_OPTIONS = {
    exclude: process.env.INPUT_DIR + '**',
    sourceMap: false
};

const POSTCSS_PLUGIN_OPTIONS = {
    sourceMap: false
};

const TERSER_PLUGIN_OPTIONS = {
    compress: {
        keep_infinity: true,
        pure_getters: true,
        reduce_funcs: false
    }
};

const PLUGINS = [replace(REPLACE_PLUGIN_OPTIONS), resolve(RESOLVE_PLUGIN_OPTIONS), commonjs(COMMONJS_PLUGIN_OPTIONS), babel(BABEL_PLUGIN_OPTIONS), postcss(POSTCSS_PLUGIN_OPTIONS)];

const PLUGINS_COMPONENT = NPM_LINK ? PLUGINS : [alias(ALIAS_PLUGIN_OPTIONS_FOR_COMPONENT), ...PLUGINS];

function addEntry(name, input, output, isComponent = true) {
    const exports = name === 'primereact.api' || name === 'primereact' ? 'named' : 'auto';
    const useCorePlugin = !NPM_LINK && ALIAS_COMPONENT_ENTRIES.some((entry) => entry.replacement === name.replaceAll('.', '/'));
    const plugins = isComponent ? PLUGINS_COMPONENT : PLUGINS;
    const external = isComponent ? EXTERNAL_COMPONENT : EXTERNAL;
    const inlineDynamicImports = true;

    const onwarn = (warning) => {
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
            return;
        }
    };

    const getEntry = (isMinify) => {
        return {
            onwarn,
            input,
            plugins: [...plugins, isMinify && terser(TERSER_PLUGIN_OPTIONS), useCorePlugin && corePlugin()],
            external,
            inlineDynamicImports
        };
    };

    const get_CJS_ESM = (isMinify) => {
        return {
            ...getEntry(isMinify),
            output: [
                ...(NPM_LINK
                    ? []
                    : [
                          {
                              format: 'cjs',
                              file: `${output}.cjs${isMinify ? '.min' : ''}.js`,
                              exports,
                              banner: "'use client';" // This line is required for SSR.
                          }
                      ]),
                {
                    format: 'esm',
                    file: `${output}.esm${isMinify ? '.min' : ''}.js`,
                    exports,
                    banner: "'use client';" // This line is required for SSR.
                }
            ]
        };
    };

    const get_IIFE = (isMinify) => {
        return {
            ...getEntry(isMinify),
            output: [
                {
                    format: 'iife',
                    name,
                    file: `${output}${isMinify ? '.min' : ''}.js`,
                    globals: isComponent ? GLOBAL_COMPONENT_DEPENDENCIES : GLOBAL_DEPENDENCIES,
                    exports
                }
            ]
        };
    };

    entries.push(get_CJS_ESM());

    if (!NPM_LINK) {
        entries.push(get_IIFE());

        // Minify
        entries.push(get_CJS_ESM(true));
        entries.push(get_IIFE(true));
    }
}

function corePlugin() {
    return {
        name: 'corePlugin',
        generateBundle(outputOptions, bundle) {
            const { name, format } = outputOptions;

            if (format === 'iife') {
                Object.keys(bundle).forEach((id) => {
                    const chunk = bundle[id];
                    const folderName = name.replace('primereact.', '').replaceAll('.', '/');
                    const filePath = `./dist/core/core${id.indexOf('.min.js') > 0 ? '.min.js' : '.js'}`;

                    core[filePath] ? (core[filePath][folderName] = chunk.code) : (core[filePath] = { [`${folderName}`]: chunk.code });
                });
            }
        }
    };
}

function addCore() {
    const lastEntry = entries[entries.length - 1];

    lastEntry.plugins = [
        ...lastEntry.plugins,
        {
            name: 'coreMergePlugin',
            generateBundle() {
                Object.entries(core).forEach(([filePath, value]) => {
                    const code = ALIAS_COMPONENT_ENTRIES.reduce((val, entry) => {
                        const name = entry.replacement.replace('primereact/', '');

                        val += value[name] + '\n';

                        return val;
                    }, '');

                    fs.outputFile(path.resolve(__dirname, filePath), code, {}, function (err) {
                        if (err) {
                            // eslint-disable-next-line no-console
                            return console.error(err);
                        }
                    });
                });
            }
        }
    ];
}

function addComponent() {
    fs.readdirSync(path.resolve(__dirname, process.env.INPUT_DIR), { withFileTypes: true })
        .filter((dir) => dir.isDirectory())
        .forEach(({ name: folderName }) => {
            fs.readdirSync(path.resolve(__dirname, process.env.INPUT_DIR + folderName)).forEach((file) => {
                const name = file.split(/(.js)$/)[0].toLowerCase();

                if (name === folderName) {
                    const input = process.env.INPUT_DIR + folderName + '/' + file;
                    const output = process.env.OUTPUT_DIR + folderName + '/' + name;

                    addEntry('primereact.' + folderName, input, output, true);
                }
            });
        });
}

function addIcon() {
    const iconDir = path.resolve(__dirname, process.env.INPUT_DIR + 'icons');

    fs.readdirSync(path.resolve(__dirname, iconDir), { withFileTypes: true })
        .filter((dir) => dir.isDirectory())
        .forEach(({ name: folderName }) => {
            fs.readdirSync(path.resolve(__dirname, iconDir + '/' + folderName)).forEach((file) => {
                if (/\.js$/.test(file)) {
                    const name = file.split(/(.js)$/)[0].toLowerCase();
                    const input = process.env.INPUT_DIR + 'icons/' + folderName + '/' + file;
                    const output = process.env.OUTPUT_DIR + 'icons/' + folderName + '/' + name;

                    addEntry('primereact.icons.' + folderName, input, output, true);
                }
            });
        });
}

function addPassThrough() {
    const inputDir = process.env.INPUT_DIR + 'passthrough';
    const outputDir = process.env.OUTPUT_DIR + 'passthrough';

    addEntry('passthrough', `${inputDir}/index.js`, `${outputDir}/index`, false);
    addEntry('passthrough.tailwind', `${inputDir}/tailwind/index.js`, `${outputDir}/tailwind/index`, false);
}

function addPrimeReact() {
    const input = process.env.INPUT_DIR + 'primereact.all.js';
    const output = process.env.OUTPUT_DIR + 'primereact.all';

    addEntry('primereact', input, output, false);
}

function addPackageJson() {
    const outputDir = path.resolve(__dirname, process.env.OUTPUT_DIR);
    const packageJson = `{
    "name": "@wawjs/react-prime",
    "version": "${pkg.version}",
    "private": false,
    "author": "Web Art Work",
    "description": "react-prime is an independent MIT-licensed React UI component library continuing from the PrimeReact 10.9.9 codebase.",
    "homepage": "https://github.com/WebArtWork/react-prime",
    "repository": {
        "type": "git",
        "url": "https://github.com/WebArtWork/react-prime.git"
    },
    "license": "MIT",
    "bugs": {
        "url": "https://github.com/WebArtWork/react-prime/issues"
    },
    "publishConfig": {
        "access": "public"
    },
    "keywords": [
        "react-prime",
        "primereact",
        "react",
        "hooks",
        "next",
        "nextjs",
        "ui-kit",
        "ui library",
        "component library",
        "material",
        "material design",
        "bootstrap",
        "tailwind theme",
        "dark theme",
        "react components",
        "responsive components"
    ],
    "unpkg": "primereact.all.min.js",
    "jsdelivr": "primereact.all.min.js",
    "main": "primereact.all.min.js",
    "module": "primereact.all.esm.min.js",
    "web-types": "web-types.json",
    "peerDependencies": {
        "@types/react": "^17.0.0 || ^18.0.0 || ^19.0.0",
        "react": "^17.0.0 || ^18.0.0 || ^19.0.0",
        "react-dom": "^17.0.0 || ^18.0.0 || ^19.0.0"
    },
    "peerDependenciesMeta": {
        "@types/react": {
            "optional": true
        }
    },
    "dependencies": {
        "@types/react-transition-group": "^4.4.1",
        "react-transition-group": "^4.4.1"
    },
    "sideEffects": [
        "**/*.css"
    ],
    "engines": {
        "node": ">=14.0.0"
    }
}`;

    !fs.existsSync(outputDir) && fs.mkdirSync(outputDir);
    fs.writeFileSync(path.resolve(outputDir, 'package.json'), packageJson);
}

addIcon();
addComponent();
addPrimeReact();
addPassThrough();
addCore();
addPackageJson();

export default entries;
