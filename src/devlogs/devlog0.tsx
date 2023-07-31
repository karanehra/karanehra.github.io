import BgColorSpan from "../components/BgColorSpan";
import Divider from "../components/Divider";
import Layout from "../components/Layout";

const DevLog0 = () => {
  return (
    <Layout>
      <h1 className="font-black text-primary text-3xl mb-3 md:text-8xl md:mb-5">
        <BgColorSpan>#0</BgColorSpan>
      </h1>
      <h1 className="text-3xl font-bold text-primary ">
        Making my homeserver accessible over the internet
      </h1>
      <Divider />

      <p className="text-md text-primary mb-6">
        Once I had my{" "}
        <a href="/homeserver" className="underline">
          homeserver
        </a>{" "}
        up and running over my home network I wanted to be able to access it
        over the internet as well. I would then be able to connect to it from
        anywhere. I knew it would take some networking knowledge and
        workarounds.
      </p>

      <p className="text-md text-primary mb-6">
        I understood the need for a static IPv4. But doing it over the router
        was not possible due to NAT and dynamic IP allocation by Jio. If there
        was an option to turn off DHCP I was not able to find it. I looked
        around if Jio had plans that provided a Static IP but they required a
        registered business and a lot of paperwork.
      </p>

      <p className="text-md text-primary mb-6">
        I found{" "}
        <a
          href="https://broadband.forum/threads/guide-how-to-host-webservers-on-jio-fiber-accessible-to-ipv4-clients.204996/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          this
        </a>{" "}
        while browsing around and realized that I could always use IPv6 since i
        dont need to worry about a lot of clients. I always have a phone around
        and Airtel 5G allows IPv6(unlike the Jio Router), for now.
      </p>

      <p className="text-md text-primary mb-6">
        I found the public IPv6 for my homeserver using ifconfig. I put the
        address into my mac(connected to the home wifi), and it worked. I tried
        the same over Airtel 5G, and as expected, I could not reach the IP. I
        logged into my router and opened up all IPv6 traffic for the time being,
        and trying again I
      </p>
    </Layout>
  );
};

export default DevLog0;
