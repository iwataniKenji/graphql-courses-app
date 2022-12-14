<h1 align="center">GRAPHQL COURSES APP</h1>

<h2 align="center">Summary</h2>

<p align="center">
    <a href="#about">📙 About</a>
    <a href="#preview">🖼️ Preview</a>
    <a href="#start">📖 How to Start</a>
    <a href="#features">💡 Features</a>
    <a href="#technologies">💻 Technologies</a>
</p>

<h4 align="center">
   ✔️ GraphQL Courses App finished  ✔️
</h4>

<H2 id="about">📙 About</H2>

<p>Another project based on GraphQL usage that includes simple but powerful features such as getting data from two different API sources at the same time, server side rendering provided by the nextjs integration and much more. In addiction, this course plaftform was developed with NestJS this time, unlike the previous projects brought by Rocketseat that uses only Node Express instead.
In conclusion, this layout was premade provided, taking into account the application is mostly focused on learning backend implementations (that was actually pretty challenging fixing mistyping and version bugs).</p>

<p>Originally created on Ignite Lab #1 from <a href="https://www.rocketseat.com.br/">Rocketseat</a> and made by <a href="https://www.linkedin.com/in/kleverson-kenji-iwatani/">Kenji Iwatani</a></p>

---

<H2 id="preview">🖼️ Preview</H2>

<section align="center">
    <img alt="GraphQL Courses App website overview" src="./preview.gif"/>
</section>

---

<H2 id="start">📖 How to Start</H2>

<h4>Starting this repository</h3>

```bash
# Clone this repository
$ git clone https://github.com/iwataniKenji/ignite-lab.git

# Access the project directory
$ cd ignite-lab
```

<h4>Server</h4>

```bash
# Running the database
$ docker-compose up -d
```

<h4>Backend (do the same on "purchases" and "gateway" folder)</h4>

```bash
# Access the "classroom" folder
$ cd classroom

# Install dependencies
$ npm install

# Rename '.env.example' to '.env' and set your variables
$ ren ".env.example" ".env"

# Run the migrations
$ npx prisma migrate dev

# Start the server
$ npm run start:dev
```

<h4>Frontend</h4>

```bash
# Access the "web" folder
$ cd web

# Install dependencies
$ yarn

# Rename '.env.local.example' to '.env.local' and set your variables
$ ren ".env.example" ".env.local"

# Start the application
$ yarn dev
```

---

<H2 id="features">💡 Features</H2>

- [x] Complete application that includes frontend, backend and database usage
- [x] A clean architecture driven project
- [x] Basic GraphQL implementation using inputs, models and resolvers
- [x] Data fetching through queries and mutations
- [x] Prisma integration as ORM service
- [x] Getting data from two different APIs (classroom and purchases) at the same time using Apollo Federation
- [ ] Full integration of backend, database and gateway on the frontend template  

---

<H2 id="technologies">💻 Technologies</H2>

<h4>Frontend</h4>

- [x] <a href="https://nextjs.org/">NextJS</a>
- [x] <a href="https://reactjs.org/">React</a>
- [x] <a href="https://www.typescriptlang.org/">Typescript</a>
- [x] <a href="https://tailwindcss.com/">Tailwind CSS</a>
- [x] <a href="https://www.graphql-code-generator.com/">Codegen</a>

<h4>Backend</h4>

- [x] <a href="https://nestjs.com/">NestJS</a>
- [x] <a href="https://auth0.com/">Auth0</a>
- [x] <a href="https://graphql.org/">GraphQL</a>
- [x] <a href="https://www.docker.com/">Docker</a>
- [x] <a href="https://www.apollo.io/">Apollo</a>
- [x] <a href="https://www.apollographql.com/apollo-federation/">Apollo Federation</a>
- [x] <a href="https://graphql.org/">GraphQL</a>
- [x] <a href="https://kafka.js.org/">Kafka</a>
