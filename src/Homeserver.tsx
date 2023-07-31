import { useState } from "react";
import Layout from "./components/Layout";
import { BiSolidServer, BiLink } from "react-icons/bi";
import Divider from "./components/Divider";
import BgColorSpan from "./components/BgColorSpan";
import SSHGraphic from "./assets/ssh.png";

const HomeServer = () => {
  return (
    <Layout>
      <h1 className="text-6xl text-primary mb-4 font-black">
        <BiSolidServer />
      </h1>

      <p className="text-md text-primary ">
        I'm building a homeserver as a means of fulfilling a childhood wish of
        building a pc while also using it as a means of learning.
      </p>

      <Divider />

      <h3 className="text-xl text-primary font-bold">Specs</h3>

      <ul className="list-inside list-disc">
        <li className="text-primary text-sm">
          <BgColorSpan noXPad={true}>Motherboard:</BgColorSpan>{" "}
          <a
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.amazon.in/gp/product/B083GK2GXR"
          >
            MSI A320M-A{" "}
          </a>
        </li>
        <li className="text-primary text-sm">
          <BgColorSpan noXPad={true}>Processor:</BgColorSpan>{" "}
          <a
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.amazon.in/gp/product/B07STGHZK8"
          >
            Ryzen 3 3200G
          </a>
        </li>
        <li className="text-primary text-sm">
          <BgColorSpan noXPad={true}>RAM:</BgColorSpan>{" "}
          <a
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.amazon.in/gp/product/B08C56GZGK"
          >
            Crucial 2 X 16GB DDR4
          </a>
        </li>
        <li className="text-primary text-sm">
          <BgColorSpan noXPad={true}>HDD:</BgColorSpan>{" "}
          <a
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.amazon.in/gp/product/B01LNJBA2I"
          >
            Seagate Barracuda 1TB
          </a>
        </li>
        <li className="text-primary text-sm">
          <BgColorSpan noXPad={true}>PSU:</BgColorSpan>{" "}
          <a
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.amazon.in/gp/product/B08H5QR9FL"
          >
            Cooler Master MWE 550W
          </a>
        </li>
        <li className="text-primary text-sm">
          <BgColorSpan noXPad={true}>Case:</BgColorSpan>{" "}
          <a
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.amazon.in/gp/product/B0BJ646MXJ"
          >
            Deepcool CH370
          </a>
        </li>
        <li className="text-primary text-sm">
          <BgColorSpan noXPad={true}>OS:</BgColorSpan>{" "}
          <a
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
            href="https://releases.ubuntu.com/jammy/"
          >
            Ubuntu Jammy
          </a>
        </li>
      </ul>

      <h3 className="text-xs text-primary my-2">
        I went with a simple and economic micro ATX build for starters. It will
        take some work to fully consume the machine in the beginning. This felt
        like a good starting point to figure things out
      </h3>

      <h3 className="text-xs text-primary mb-2">
        I also bought some thermal paste. A USB stick to flash linux onto the
        server. And some cheap peripherals for when I would NOT be SSHing.
      </h3>

      <h3 className="text-xs text-primary mb-2">
        I needed internet connectivity now.
      </h3>

      <Divider />

      <h3 className="text-xl text-primary font-bold">Network Connectivity</h3>
      <ul className="list-inside list-disc">
        <li className="text-primary text-sm">
          I use a Jio Fiber connection with Jio's router. I did not add a
          network card to the build. Luckily I had a LAN cable lying around and
          the house. I guess the 1000 megabit/s Ethernet port on the motherboard
          would more than be okay for now.
        </li>
        <li className="text-primary text-sm">
          Connected the LAN cable and my oh my it autoconfigured with no
          terminal magic needed. God bless linux and jio both
        </li>
        <li className="text-primary text-sm">
          Got online, updated all deps and packages and did the usual apt stuff.
          Browsed the web a little.
        </li>
        <li className="text-primary text-sm">
          Ran a test python3 http.server on 8000. Found the private IP of the
          machine. Was able to access the port from another machine on the
          network
        </li>
        <li className="text-primary text-sm">Setup SSHd</li>
        <li className="text-primary text-sm">
          Checked the SSH login from my mac. It worked. I ditched the
          peripherals and went headless.
        </li>
        <li className="text-primary text-sm">
          Removed the useless update-motd's and added a custom ASCII art.
        </li>
        <div className="flex flex-col justify-center items-center p-2">
          <img src={SSHGraphic} alt="" className="mb-2" />
          <span className="text-primary text-center text-xs w-4/5">
            Chimera: the greek mythology monster with "a lions head, a goats
            body and a serpent's tail"
          </span>
        </div>
        <li className="text-primary text-sm">
          I now had a machine at my disposal.
        </li>
      </ul>

      <Divider />

      <h3 className="text-xl text-primary font-bold">Future Plans</h3>
      <ul className="list-inside list-disc">
        <li className="text-primary text-sm">Adding a Static Public IP</li>
        <li className="text-primary text-sm">Setup RAID</li>
        <li className="text-primary text-sm">Setup Kali</li>
        <li className="text-primary text-sm">Setup Jenkins</li>
        <li className="text-primary text-sm">Setup Grafana and Prometheus</li>
        <li className="text-primary text-sm">
          Build a variety of storage solutions like Mongo and PostgreSQL and
          make them publicly accessible
        </li>
        <li className="text-primary text-sm">
          Add a UPS to the setup to add more resilience. The power is spotty in
          Bangalore sometimes
        </li>
      </ul>

      <Divider />
    </Layout>
  );
};

export default HomeServer;
