import Image from "next/image";
import FooterAbout from "../../molecules/FooterItem/FooterAbout";
import FooterMenu from "../../molecules/FooterItem/FooterMenu";

export default function Footer() {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <a href="" className="mb-30">
                <Image src="/icon/logo.svg" height={60} width={60} alt="logo" />
              </a>
              <FooterAbout
                title1="StoreGG membantu gamers"
                title2="untuk menjadi pemenang sejati"
              />
              <FooterAbout title1="Copyright 2021. All Rights Reserved." />
            </div>
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <FooterMenu
                  title="Company"
                  subtitle1="About Us"
                  subtitle2="Press Release"
                  subtitle3="Term of use"
                  subtitle4="Privacy & Policy"
                />
                <FooterMenu
                  title="Support"
                  subtitle1="Refund Policy"
                  subtitle2="Unlock Rewards"
                  subtitle3="Live Chatting"
                />

                <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">
                    Connect
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-6">
                      <a
                        href="mailto: hi@store.gg"
                        className="text-lg color-palette-1 text-decoration-none"
                      >
                        hi@store.gg
                      </a>
                    </li>
                    <li className="mb-6">
                      <a
                        href="mailto: team@store.gg"
                        className="text-lg color-palette-1 text-decoration-none"
                      >
                        team@store.gg
                      </a>
                    </li>
                    <li className="mb-6">
                      <a
                        href="http://maps.google.com/?q=Pasific 12,
                                        Jakarta Selatan"
                        className="text-lg color-palette-1 text-decoration-none"
                      >
                        Pasific 12, Jakarta Selatan
                      </a>
                    </li>
                    <li className="mb-6">
                      <a
                        href="tel: 02111229090"
                        className="text-lg color-palette-1 text-decoration-none"
                      >
                        021 - 1122 - 9090
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
