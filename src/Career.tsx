import BgColorSpan from "./components/BgColorSpan";
import BgColorText from "./components/BgColorText";
import Divider from "./components/Divider";
import Layout from "./components/Layout";

const Careeer = () => {
  return (
    <Layout>
      <h1 className="text-6xl text-primary mb-4 font-black">Career</h1>

      <p className="text-md text-primary ">
        I have been working professionally for 4 years. I started off in college
        with odd jobs, side hustles, iternships and freelance work. I love to
        learn new things and experiment with the latest technologies
      </p>

      <Divider />

      <BgColorText className="text-3xl text-primary font-black">
        Affinidi India
      </BgColorText>
      <h3 className="text-xl text-primary font-bold">Full Stack Engineer</h3>
      <h3 className="text-xs text-primary mb-2">November 22 - Current</h3>

      <ul className="list-inside list-disc">
        <li className="text-primary text-sm">
          Working on Affinidi Secure Authentication. Includes a{" "}
          <BgColorSpan>browser extension</BgColorSpan> edge wallet for our users
          and the Beta Developer program, creating documentation, test projects
          and blog posts
        </li>
        <li className="text-primary text-sm">
          Working on the <BgColorSpan>Affinidi OAuth Project</BgColorSpan> that
          integrates with various identity providers like{" "}
          <BgColorSpan>AWS IAM</BgColorSpan>, <BgColorSpan>Auth0</BgColorSpan>,{" "}
          <BgColorSpan>and Azure AD</BgColorSpan> to allow our users to login on
          any website that implements it
        </li>
        <li className="text-primary text-sm">
          Introduced <BgColorSpan>Codepush</BgColorSpan> deployments and
          monitoring using <BgColorSpan>Microsoft AppCenter</BgColorSpan> to our
          <BgColorSpan>GitLab Deployment Pipelines</BgColorSpan>. Helped reduce
          the android app deployment times by more than 500% allowing the
          engineering team to deploy quickly and without fear
        </li>
        <li className="text-primary text-sm">
          Worked on building an <BgColorSpan>Elastic Search</BgColorSpan> node
          allowing querying a huge data-set based on complicated rule-sets and
          business logic
        </li>
        <li className="text-primary text-sm">
          Worked on the <BgColorSpan>Asli ID Wallet Android</BgColorSpan> app.
          Built with <BgColorSpan>React Native</BgColorSpan>,{" "}
          <BgColorSpan>Typescript</BgColorSpan>, and{" "}
          <BgColorSpan>Redux</BgColorSpan>. Used testing library to create a
          well-tested code-base
        </li>
        <li className="text-primary text-sm">
          Spearheading the Research and Development of an internal{" "}
          <BgColorSpan>UI Library</BgColorSpan> with the aims of standardizing
          the UI of all our products
        </li>
        <li className="text-primary text-sm">
          Spearheaded the development of the{" "}
          <BgColorSpan>Asli ID Skills PWA</BgColorSpan>. The app acts as a
          landing page for marketing campaigns onboard Blue Collar Workers into
          our ecosystem. Built using <BgColorSpan>React</BgColorSpan> and {""}
          <BgColorSpan>Typescript</BgColorSpan>, using{" "}
          <BgColorSpan>SCSS</BgColorSpan> for styling. The code-base has the
          highest test coverage in the org due to an extensive test suite built
          with React Testing Library
        </li>
      </ul>

      <Divider />

      <BgColorText className="text-3xl text-primary font-black">
        Tophatter
      </BgColorText>
      <h3 className="text-xl text-primary font-bold">
        Software Development Engineer 2
      </h3>
      <h3 className="text-xs text-primary mb-2">September 21 - November 22</h3>

      <ul className="list-inside list-disc">
        <li className="text-primary text-sm">
          Worked on all facets of the Tophatter Website and mobile Apps, using
          <BgColorSpan>Ruby on Rails</BgColorSpan>,{" "}
          <BgColorSpan>React</BgColorSpan> and{" "}
          <BgColorSpan>React Native</BgColorSpan>
        </li>
        <li className="text-primary text-sm">
          Spearheaded the effort to create an internal, shared{" "}
          <BgColorSpan>NPM package</BgColorSpan>
          consumed by all clients to minimize code duplication
        </li>
        <li className="text-primary text-sm">
          Optimized the company’s tech infrastructure to save costs and doing
          more with less, saving <BgColorSpan>thousands of dollars</BgColorSpan>{" "}
          in monthly deployment costs
        </li>
        <li className="text-primary text-sm">
          Worked <BgColorSpan>PagerDuty</BgColorSpan> on-call shifts involving
          incident response and management to ensure smooth operations across
          the board with minimal downtime, allowing me to gain an in-depth
          knowledge of all internal subsystems and infrastructure
        </li>
        <li className="text-primary text-sm">
          Introduced the team to{" "}
          <BgColorSpan>React Testing Library</BgColorSpan> as a standard to
          replace older UI testing techniques, allowing us to deploy without
          worries of regressing bugs
        </li>
        <li className="text-primary text-sm">
          Wrote well-structured and battle-tested client and server code with
          high test coverage in <BgColorSpan>RSpec</BgColorSpan> or{" "}
          <BgColorSpan>Jest</BgColorSpan>
        </li>
        <li className="text-primary text-sm">
          Created administration tools in <BgColorSpan>Rails</BgColorSpan> and{" "}
          <BgColorSpan>HAML</BgColorSpan> for internal teams to reduce query
          TATs and optimizing team velocities
        </li>
        <li className="text-primary text-sm">
          Spearheaded the complete overhaul of Tophatter's User Interface since
          past December, creating shared components with{" "}
          <BgColorSpan>Storybook</BgColorSpan> entries
        </li>
        <li className="text-primary text-sm">
          Used <BgColorSpan>Datadog</BgColorSpan>,{" "}
          <BgColorSpan>Rollbar</BgColorSpan>, and{" "}
          <BgColorSpan>Crashalytics</BgColorSpan> for setting up key metric
          monitors, application performance monitoring, and critical production
          logging
        </li>
      </ul>

      <Divider />

      <BgColorText className="text-3xl text-primary font-black">
        HDFC Life
      </BgColorText>
      <h3 className="text-xl text-primary font-bold">
        Senior Software Engineer
      </h3>
      <h3 className="text-xs text-primary mb-2">July 19 - September 21</h3>

      <ul className="list-disc list-inside">
        <li className="text-primary text-sm">
          Worked as the <BgColorSpan>Lead NodeJS Engineer</BgColorSpan> for the
          Rider Renewal project aimed to increase insurance and rider sales via
          elaborate SMS campaigns
        </li>
        <li className="text-primary text-sm">
          Championed digitizing the on-boarding process of Financial Consultants
          as the <BgColorSpan>Lead React Engineer</BgColorSpan> for the InstaPRL
          application suite
        </li>
        <li className="text-primary text-sm">
          Handled various payment gateway integrations from providers such as
          <BgColorSpan>Google-Pay</BgColorSpan>,{" "}
          <BgColorSpan>Ineginco</BgColorSpan>, and{" "}
          <BgColorSpan>RazorPay</BgColorSpan>, working on Database Modelling,
          Webhook creation, and client-side SDK integrations
        </li>
        <li className="text-primary text-sm">
          Migrated an internal tool from <BgColorSpan>AWS DynamoDB</BgColorSpan>{" "}
          to <BgColorSpan>MongoDB</BgColorSpan>, saving lakhs of rupees in
          infrastructural costs
        </li>
        <li className="text-primary text-sm">
          Created a template frontend repository using cutting-edge React
          practices, complete with detailed contribution guidelines allowing it
          to be used across projects
        </li>
        <li className="text-primary text-sm">
          Created a dashboard of <BgColorSpan>cryptography</BgColorSpan>{" "}
          utilities for usage by the internal Information Security teams,
          greatly increasing the velocity of deployment approvals
        </li>
        <li className="text-primary text-sm">
          Actively contributed in various innovation projects and spikes to
          improve the overall team productivity and tech standards
        </li>
      </ul>

      <Divider />
    </Layout>
  );
};

export default Careeer;
