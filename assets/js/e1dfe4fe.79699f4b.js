"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4778],{2290:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var r=o(5893),i=o(1151);function t(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"docker-instance",children:"Docker Instance"}),"\n",(0,r.jsx)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/70zJ_h4uiD8",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),"\n",(0,r.jsx)(n.p,{children:"This Docker Compose project creates a zrok instance and includes a ziti controller and router. An optional Caddy container is included to provide HTTPS and reverse proxy services for the zrok API and public shares."}),"\n",(0,r.jsx)(n.h3,{id:"dns-configuration",children:"DNS Configuration"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["A wildcard record exists for the IP address where the zrok instance will run, e.g. if your DNS zone is ",(0,r.jsx)(n.code,{children:"share.example.com"}),", then your wildcard record is ",(0,r.jsx)(n.code,{children:"*.share.example.com"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"additional-dns-configuration-for-caddy-tls",children:"Additional DNS Configuration for Caddy TLS"}),"\n",(0,r.jsxs)(n.p,{children:["The included Caddy container can automatically manage a wildcard certificate for your zrok instance. You can enable Caddy in this compose project by renaming ",(0,r.jsx)(n.code,{children:"compose.caddy.yml"})," as ",(0,r.jsx)(n.code,{children:"compose.override.yml"}),"."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Ensure A Caddy DNS plugin is available for your DNS provider (see ",(0,r.jsx)(n.a,{href:"https://github.com/orgs/caddy-dns/repositories?type=all&q=sort%3Aname-asc",children:"github.com/caddy-dns"}),")."]}),"\n",(0,r.jsxs)(n.li,{children:["Designate A DNS zone for zrok, e.g. ",(0,r.jsx)(n.code,{children:"example.com"})," or ",(0,r.jsx)(n.code,{children:"share.example.com"})," and create the zone on your DNS provider's platform."]}),"\n",(0,r.jsx)(n.li,{children:"Created an API token in your DNS provider that has permission to manage zrok's DNS zone."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"create-the-docker-compose-project",children:"Create the Docker Compose Project"}),"\n",(0,r.jsx)(n.p,{children:"Create a working directory on your Docker host and save these Docker Compose project files."}),"\n",(0,r.jsx)(n.h4,{id:"shortcut-option",children:"Shortcut Option"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Run this script to download the files in the current directory."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl https://get.openziti.io/zrok-instance/fetch.bash | bash\n"})}),"\n",(0,r.jsx)(n.p,{children:"Or, specify the Compose project directory."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl https://get.openziti.io/zrok-instance/fetch.bash | bash -s /path/to/compose/project/dir\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"manual-option",children:"Manual Option"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Get the zrok repo ZIP file."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"wget https://github.com/openziti/zrok/archive/refs/heads/main.zip\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Unzip the zrok-instance files into the project directory."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"unzip -j -d . main.zip '*/docker/compose/zrok-instance/*'\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"configure-the-docker-compose-project-environment",children:"Configure the Docker Compose Project Environment"}),"\n",(0,r.jsxs)(n.p,{children:["Create an ",(0,r.jsx)(n.code,{children:".env"})," file in the working directory."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'title=".env required"',children:"ZROK_DNS_ZONE=share.example.com\n\nZROK_USER_EMAIL=me@example.com\nZROK_USER_PWD=zrokuserpw\n\nZITI_PWD=zitiadminpw\nZROK_ADMIN_TOKEN=zroktoken\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'title=".env options"',children:"# Caddy TLS option: rename compose.caddy.yml to compose.override.yml and set these vars; allow 80,443 in firewall\n# plugin name for your DNS provider\nCADDY_DNS_PLUGIN=cloudflare\n# API token from your DNS provider\nCADDY_DNS_PLUGIN_TOKEN=abcd1234\n# use the staging API until you're sure everything is working to avoid hitting the rate limit\nCADDY_ACME_API=https://acme-staging-v02.api.letsencrypt.org/directory\n\n# no TLS option: publish the insecure ports to the internet and allow them in the firewall \nZROK_INSECURE_INTERFACE=0.0.0.0\nZROK_CTRL_PORT=18080\nZROK_FRONTEND_PORT=8080\nZROK_OAUTH_PORT=8081\n\n# ziti ports must be published to the internet and allowed by firewall\nZITI_CTRL_ADVERTISED_PORT=1280\nZITI_ROUTER_PORT=3022\n\n# configure oauth for public shares\nZROK_OAUTH_HASH_KEY=oauthhashkeysecret\nZROK_OAUTH_GITHUB_CLIENT_ID=abcd1234\nZROK_OAUTH_GITHUB_CLIENT_SECRET=abcd1234\nZROK_OAUTH_GOOGLE_CLIENT_ID=abcd1234\nZROK_OAUTH_GOOGLE_CLIENT_SECRET=abcd1234\n\n# zrok version, e.g., 1.0.0\nZROK_CLI_TAG=latest\n# ziti version, e.g., 1.0.0\nZITI_CLI_TAG=latest\n"})}),"\n",(0,r.jsx)(n.h3,{id:"start-the-docker-compose-project",children:"Start the Docker Compose Project"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Start the zrok instance."}),"\n",(0,r.jsxs)(n.p,{children:["The container images for zrok (including caddy) are built in this step. This provides a simple configuration to get started. You can modify the templates named like ",(0,r.jsx)(n.code,{children:"*.envsubst"})," or mount a customized configuration file to mask the one that was built in."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker compose up --build --detach\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"set-up-a-user-account",children:"Set up a User Account"}),"\n",(0,r.jsxs)(n.p,{children:["This step creates a user account. You will log in to the zrok web console with the account password created in this step. The ZROK_USER_EMAIL and ZROK_USER_PWD variables are set in the ",(0,r.jsx)(n.code,{children:".env"})," file. You can create more user accounts the same way by substituting a different email and password."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'title="Create the first user account"',children:"docker compose exec zrok-controller bash -xc 'zrok admin create account ${ZROK_USER_EMAIL} ${ZROK_USER_PWD}'\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-buttonless",metastring:'title="Example output"',children:"+ zrok admin create account me@example.com zrokuserpw\n[   0.000]    INFO zrok/controller/store.Open: database connected\n[   0.002]    INFO zrok/controller/store.(*Store).migrate: applied 0 migrations\nheMqncCyxZcx\n"})}),"\n",(0,r.jsx)(n.p,{children:"Create additional users by running the command again with a different email and password."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'title="Create another user"',children:"docker compose exec zrok-controller zrok admin create account <email> <password>\n"})}),"\n",(0,r.jsx)(n.h3,{id:"enable-the-user-environment",children:"Enable the User Environment"}),"\n",(0,r.jsx)(n.p,{children:"You must enable each device environment with the account token obtained when the account was created. This is separate from the account password that's used to log in to the web console."}),"\n",(0,r.jsxs)(n.p,{children:["Follow ",(0,r.jsx)(n.a,{href:"/docs/getting-started#installing-the-zrok-command",children:"the getting started guide"})," to install the zrok CLI on some device and enable a zrok environment."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Configure the environment with the zrok API. Substitute the API endpoint with the one you're using, e.g. ",(0,r.jsx)(n.code,{children:"https://zrok.${ZROK_DNS_ZONE}"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"zrok config set apiEndpoint https://zrok.share.example.com\n"})}),"\n",(0,r.jsx)(n.p,{children:"or, if not using Caddy for TLS:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"zrok config set apiEndpoint http://zrok.share.example.com:18080\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Enable an environment on this device with the account token from the previous step."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"zrok enable heMqncCyxZcx\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"firewall-configuration",children:"Firewall Configuration"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"ziti-quickstart"})," and ",(0,r.jsx)(n.code,{children:"caddy"})," containers publish ports to all devices that use zrok shares. The ",(0,r.jsx)(n.code,{children:"zrok-controller"})," and ",(0,r.jsx)(n.code,{children:"zrok-frontend"})," containers expose ports only to the ",(0,r.jsx)(n.code,{children:"caddy"})," container and the Docker host's loopback interface."]}),"\n",(0,r.jsx)(n.h4,{id:"required",children:"Required"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"443/tcp"})," - reverse proxy handles HTTPS requests for zrok API, OAuth, and public shares (published by container ",(0,r.jsx)(n.code,{children:"caddy"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"1280/tcp"})," - ziti ctrl plane (published by container ",(0,r.jsx)(n.code,{children:"ziti-quickstart"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"3022/tcp"})," - ziti data plane (published by container ",(0,r.jsx)(n.code,{children:"ziti-quickstart"}),")"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"optional",children:"Optional"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"80/tcp"})," - reverse proxy redirects non-HTTPS requests to ",(0,r.jsx)(n.code,{children:"443/tcp"})," (published by container ",(0,r.jsx)(n.code,{children:"caddy"}),")"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Check the ziti and zrok logs."}),"\n",(0,r.jsxs)(n.p,{children:["You can substitute the service container name of each to check their logs individually: ",(0,r.jsx)(n.code,{children:"ziti-quickstart"}),", ",(0,r.jsx)(n.code,{children:"zrok-controller"}),", ",(0,r.jsx)(n.code,{children:"zrok-frontend"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker compose logs zrok-controller\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Check the caddy logs."}),"\n",(0,r.jsxs)(n.p,{children:["It can take a few minutes for Caddy to obtain the wildcard certificate. You can check the logs to see if there were any errors completing the DNS challenge which involves using the Caddy DNS plugin to create a TXT record in your DNS zone. This leverages the API token you provided in the ",(0,r.jsx)(n.code,{children:".env"})," file, which must have permission to create DNS records in the zrok DNS zone."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker compose logs caddy\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"zrok enable"})," fails certificate verification: ensure you are not using the staging API for Let's Encrypt."]}),"\n",(0,r.jsxs)(n.p,{children:["If you are using the staging API, you will see an error about the API certificate when you use the zrok CLI. You can switch to the production API by removing the overriding assignment of the ",(0,r.jsx)(n.code,{children:"CADDY_ACME_API"})," variable."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-buttonless",metastring:'title="Example output"',children:'there was a problem enabling your environment!\nyou are trying to use the zrok service at: https://zrok.share.example.com\nyou can change your zrok service endpoint using this command:\n\n$ zrok config set apiEndpoint <newEndpoint>\n\n(where newEndpoint is something like: https://some.zrok.io)\n[ERROR]: error creating service client (error getting version from api endpoint \'https://zrok.share.example.com\': Get "https://zrok.share.example.com/api/v1/version": tls: failed to verify certificate: x509: certificate signed by unknown authority: Get "https://zrok.share.example.com/api/v1/version": tls: failed to verify certificate: x509: certificate signed by unknown authority)\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Validate the Caddyfile."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker compose exec caddy caddy validate --config /etc/caddy/Caddyfile\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Verify the correct DNS provider module was built-in to Caddy."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker compose exec caddy caddy list-modules | grep dns.providers\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-buttonless",metastring:'title="Example output"',children:"dns.providers.cloudflare\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Use the Caddy admin API."}),"\n",(0,r.jsxs)(n.p,{children:["You can use the Caddy admin API to check the status of the Caddy instance. The admin API is available on port ",(0,r.jsx)(n.code,{children:"2019/tcp"})," inside the Docker Compose project. You can modify ",(0,r.jsx)(n.code,{children:"compose.override.yml"})," to publish the port if you want to access the admin API from the Docker host or elsewhere."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker compose exec caddy curl http://localhost:2019/config/ | jq\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"My provider, e.g., Route53 doesn't give me a single API token."}),"\n",(0,r.jsxs)(n.p,{children:["As long as your DNS provider is supported by Caddy then it will work. You can modify the Caddyfile to use a different set of properties than the example. Here's how the ",(0,r.jsx)(n.code,{children:"tls"})," section should look for Route53."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:"tls {\n  dns {$CADDY_DNS_PLUGIN} {\n    access_key_id {$AWS_ACCESS_KEY_ID}\n    secret_access_key {$AWS_SECRET_ACCESS_KEY}\n  }\n}\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'title=".env"',children:"CADDY_DNS_PLUGIN=route53\nAWS_ACCESS_KEY_ID=abcd1234\nAWS_SECRET_ACCESS_KEY=abcd1234\n"})}),"\n"]}),"\n"]})]})}function s(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}const c={title:"Self-hosting guide for Docker",sidebar_label:"Docker",sidebar_position:45},a=void 0,d={id:"guides/self-hosting/docker",title:"Self-hosting guide for Docker",description:"",source:"@site/../docs/guides/self-hosting/docker.mdx",sourceDirName:"guides/self-hosting",slug:"/guides/self-hosting/docker",permalink:"/docs/guides/self-hosting/docker",draft:!1,unlisted:!1,editUrl:"https://github.com/openziti/zrok/blob/main/docs/../docs/guides/self-hosting/docker.mdx",tags:[],version:"current",sidebarPosition:45,frontMatter:{title:"Self-hosting guide for Docker",sidebar_label:"Docker",sidebar_position:45},sidebar:"tutorialSidebar",previous:{title:"Personalized Frontend",permalink:"/docs/guides/self-hosting/personalized-frontend"},next:{title:"Kubernetes",permalink:"/docs/guides/self-hosting/kubernetes"}},l={},h=[{value:"Docker Instance",id:"docker-instance",level:2},{value:"DNS Configuration",id:"dns-configuration",level:3},{value:"Additional DNS Configuration for Caddy TLS",id:"additional-dns-configuration-for-caddy-tls",level:4},{value:"Create the Docker Compose Project",id:"create-the-docker-compose-project",level:3},{value:"Shortcut Option",id:"shortcut-option",level:4},{value:"Manual Option",id:"manual-option",level:4},{value:"Configure the Docker Compose Project Environment",id:"configure-the-docker-compose-project-environment",level:3},{value:"Start the Docker Compose Project",id:"start-the-docker-compose-project",level:3},{value:"Set up a User Account",id:"set-up-a-user-account",level:3},{value:"Enable the User Environment",id:"enable-the-user-environment",level:3},{value:"Firewall Configuration",id:"firewall-configuration",level:3},{value:"Required",id:"required",level:4},{value:"Optional",id:"optional",level:4},{value:"Troubleshooting",id:"troubleshooting",level:3}];function p(e){return(0,r.jsx)(s,{})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p()}},1151:(e,n,o)=>{o.d(n,{Z:()=>c,a:()=>s});var r=o(7294);const i={},t=r.createContext(i);function s(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);