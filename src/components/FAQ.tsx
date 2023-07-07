import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const FAQ: React.FC = () => {
  return (
    <section style={{ marginTop: "100px" }}>
      <h2 className="sectionTitle">Q&A</h2>
      <Accordion allowZeroExpanded allowMultipleExpanded>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Why aren't your games on the Apple App Store?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              I only have my games on the Google Play Store because Google Play
              only requires a one-time payment of $25 and I can post as many
              games as I want forever, but Apple is pretty stingy and needs me
              to pay $99 annually. Any game with an Android version can easily
              be built for iOS as well, but I simply don't want to pay the high
              price to publish them.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              How can I play your games from an iOS device?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              You can play most of my games in the web browser (ex: Safari) from
              your iOS device. Just click on any game you want to play in the
              projects section above.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              I contacted you but you haven't responded in 24 hours.
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              If you contacted me through the contact form, try emailing me
              manually to contact@ajayliu.com. If I still don't respond to you,
              my email forwarding might be down - please submit a bug report
              form{" "}
              <a
                style={{ color: "gold" }}
                href="https://forms.gle/8rxzwknToNhAyiAk6"
              >
                here
              </a>
              .
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              What did you use to make this website?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              This website was originally coded from pure HTML, CSS, and
              JavaScript. Now I have refactored the code to React and Next.js,
              written in TypeScript. This site is hosted on Netlify and all the
              code to this website can be found on my{" "}
              <a href="https://github.com/ajayliu" style={{ color: "gold" }}>
                github
              </a>
              .
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Why is your demo site not working?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Please wait a few minutes if the demo site just shows a blank
              screen. Many of my projects are pretty old and used to run for
              free on Heroku. However, Heroku discontinued their free tier so I
              migrated many of my projects to Render. Unfortunately, Render
              takes quite a while to boot up a server after inactive use, so you
              may see a blank screen for up to a minute sometimes. If my demo
              site is still not working after waiting, please contact me at
              contact@ajayliu.com.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default FAQ;
