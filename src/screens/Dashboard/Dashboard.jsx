import React from "react";
import { ArrowChevronRightWrapper } from "../../components/ArrowChevronRightWrapper";
import { BtnSecondary } from "../../components/BtnSecondary";
import { HeroiconsOutline } from "../../components/HeroiconsOutline";
import { HeroiconsOutlineWrapper } from "../../components/HeroiconsOutlineWrapper";
import { Scroll } from "../../components/Scroll";
import { Search } from "../../components/Search";
import { ArrowChevronRight } from "../../icons/ArrowChevronRight";
import { ArrowsDownArrow1 } from "../../icons/ArrowsDownArrow1";
import { BusinessCalendar } from "../../icons/BusinessCalendar";
import { CommunicationCall } from "../../icons/CommunicationCall";
import { EazipayLogoNew1 } from "../../icons/EazipayLogoNew1";
import { EducationOpenBook } from "../../icons/EducationOpenBook";
import "./style.css";

export const Dashboard = () => {
  return (
    <div className="DASHBOARD">
      <div className="div-2">
        <div className="frame-3">
          <div className="frame-4">
            <div className="frame-5">
              <div className="frame-6">
                <div className="div-wrapper">
                  <div className="welcome-abasiama">
                    Welcome&nbsp;&nbsp;Abasiama
                  </div>
                </div>
                <p className="text-wrapper-3">
                  Pay and manage your employee in minutes
                </p>
              </div>
              <div className="frame-7">
                <div className="frame-8">
                  <div className="frame-9">
                    <div className="frame-10">
                      <div className="frame-11">
                        <div className="div-wrapper">
                          <div className="text-wrapper-4">Wallet Balance</div>
                        </div>
                        <div className="frame-12">
                          <div className="div-wrapper">
                            <div className="text-wrapper-5">N12,560,078.00</div>
                          </div>
                          <img
                            className="img"
                            alt="Frame"
                            src="https://c.animaapp.com/ALsvK82i/img/frame-19.svg"
                          />
                        </div>
                      </div>
                      <div className="buttons">
                        <button className="button">Fund Wallet</button>
                      </div>
                    </div>
                    <img
                      className="frame-13"
                      alt="Frame"
                      src="https://c.animaapp.com/ALsvK82i/img/frame-48096047.svg"
                    />
                  </div>
                  <div className="frame-14">
                    <div className="frame-15">
                      <div className="heroicons-outline-user-plus-wrapper">
                        <HeroiconsOutline className="heroicons-outline-user-plus" />
                      </div>
                      <div className="text-wrapper-6">Add Employee</div>
                    </div>
                    <div className="frame-15">
                      <div className="frame-wrapper">
                        <img
                          className="frame-16"
                          alt="Frame"
                          src="https://c.animaapp.com/ALsvK82i/img/frame-2.svg"
                        />
                      </div>
                      <div className="text-wrapper-6">Pay Salaries</div>
                    </div>
                    <div className="frame-15">
                      <div className="vector-wrapper">
                        <img
                          className="vector"
                          alt="Vector"
                          src="https://c.animaapp.com/ALsvK82i/img/vector-3.svg"
                        />
                      </div>
                      <div className="text-wrapper-6">Pay Compliances</div>
                    </div>
                    <div className="frame-15">
                      <div className="img-wrapper">
                        <img
                          className="frame-17"
                          alt="Frame"
                          src="https://c.animaapp.com/ALsvK82i/img/frame-1.svg"
                        />
                      </div>
                      <div className="text-wrapper-6">Quick Loan</div>
                    </div>
                  </div>
                </div>
                <div className="dashboard-data">
                  <div className="ACTIVE-LOAN">
                    <div className="frame-18">
                      <div className="text-wrapper-7">Next Payroll</div>
                    </div>
                    <div className="frame-19">
                      <div className="frame-20">
                        <BusinessCalendar className="icon-instance-node" />
                        <div className="text-wrapper-8">Friday</div>
                      </div>
                      <div className="text-wrapper-9">09/11/2022</div>
                    </div>
                  </div>
                  <img
                    className="line"
                    alt="Line"
                    src="https://c.animaapp.com/ALsvK82i/img/line-58.svg"
                  />
                  <div className="frame-6">
                    <div className="text-wrapper-10">Total Employee</div>
                    <div className="text-wrapper-11">64</div>
                    <div className="frame-21">
                      <div className="frame-22">
                        <div className="rectangle-2" />
                        <div className="rectangle-3" />
                      </div>
                      <div className="frame-23">
                        <div className="frame-24">
                          <div className="text-wrapper-12">Male</div>
                          <div className="element">32</div>
                        </div>
                        <div className="frame-24">
                          <div className="text-wrapper-12">Female</div>
                          <div className="element">32</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="INFLOW">
              <div className="GRAPH">
                <div className="frame-25">
                  <div className="frame-26">
                    <div className="text-wrapper-10">Inflow</div>
                    <div className="text-wrapper-13">N1,567,552</div>
                  </div>
                  <div className="frame-26">
                    <div className="text-wrapper-10">Outflow</div>
                    <div className="text-wrapper-14">N1,567,552</div>
                  </div>
                  <div className="frame-27">
                    <div className="frame-28">
                      <div className="text-wrapper-15">Inflow/Outflow</div>
                      <ArrowsDownArrow1
                        className="icon-instance-node"
                        color="#8D8E8D"
                      />
                    </div>
                  </div>
                </div>
                <div className="frame-29">
                  <div className="frame-30">
                    <div className="frame-31">
                      <div className="div-wrapper">
                        <div className="text-wrapper-16">N200M</div>
                      </div>
                      <div className="div-wrapper">
                        <div className="text-wrapper-16">N100M</div>
                      </div>
                      <div className="text-wrapper-17">N50M</div>
                      <div className="text-wrapper-17">N20M</div>
                      <div className="text-wrapper-17">N0</div>
                    </div>
                    <div className="frame-32">
                      <div className="overlap">
                        <img
                          className="line-2"
                          alt="Line"
                          src="https://c.animaapp.com/ALsvK82i/img/line-2.svg"
                        />
                        <img
                          className="line-3"
                          alt="Line"
                          src="https://c.animaapp.com/ALsvK82i/img/line-4.svg"
                        />
                        <img
                          className="line-4"
                          alt="Line"
                          src="https://c.animaapp.com/ALsvK82i/img/line-4.svg"
                        />
                        <img
                          className="line-5"
                          alt="Line"
                          src="https://c.animaapp.com/ALsvK82i/img/line-4.svg"
                        />
                        <img
                          className="line-6"
                          alt="Line"
                          src="https://c.animaapp.com/ALsvK82i/img/line-4.svg"
                        />
                        <div className="overlap-wrapper">
                          <div className="overlap-group">
                            <div className="overlap-group-2">
                              <img
                                className="vector-2"
                                alt="Vector"
                                src="https://c.animaapp.com/ALsvK82i/img/vector-1.svg"
                              />
                              <img
                                className="vector-3"
                                alt="Vector"
                                src="https://c.animaapp.com/ALsvK82i/img/vector-2.svg"
                              />
                              <div className="frame-33">
                                <div className="frame-34">
                                  <div className="text-wrapper-18">N89m</div>
                                </div>
                                <div className="ellipse" />
                              </div>
                            </div>
                            <div className="frame-35">
                              <div className="frame-36">
                                <div className="text-wrapper-19">N100.57m</div>
                              </div>
                              <div className="ellipse-2" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <img
                        className="line-7"
                        alt="Line"
                        src="https://c.animaapp.com/ALsvK82i/img/line-3.svg"
                      />
                    </div>
                  </div>
                  <div className="frame-37">
                    <div className="jan-wrapper">
                      <div className="text-wrapper-16">JAN</div>
                    </div>
                    <div className="div-wrapper">
                      <div className="text-wrapper-16">FEB</div>
                    </div>
                    <div className="div-wrapper">
                      <div className="text-wrapper-16">MAR</div>
                    </div>
                    <div className="div-wrapper">
                      <div className="text-wrapper-16">APR</div>
                    </div>
                    <div className="div-wrapper">
                      <div className="text-wrapper-16">MAY</div>
                    </div>
                    <div className="div-wrapper">
                      <div className="text-wrapper-16">JUN</div>
                    </div>
                    <div className="text-wrapper-20">JUL</div>
                    <div className="text-wrapper-20">AUG</div>
                    <div className="text-wrapper-20">SEPT</div>
                    <div className="text-wrapper-20">OCT</div>
                    <div className="text-wrapper-20">NOV</div>
                    <div className="text-wrapper-20">DEC</div>
                  </div>
                </div>
                <div className="frame-38">
                  <div className="text-wrapper-21">2022</div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-39">
            <div className="text-wrapper-22">Recent Activities</div>
            <div className="frame-40">
              <Search
                className="SEARCH-2"
                divClassName="SEARCH-instance"
                frameClassName="SEARCH-2-instance"
                userInterfaceMagnifierColor="#11453B"
              />
              <BtnSecondary
                className="BTN-SECONDARY-2"
                divClassName="BTN-SECONDARY-2-instance"
                frameClassName="BTN-SECONDARY-instance"
                hasDiv={false}
                multimediaEqualizer2Color="#8D8E8D"
              />
            </div>
            <div className="frame-41">
              <div className="frame-42">
                <div className="TRANSACTION-HISTORY">
                  <div className="saturday-november-wrapper">
                    <div className="saturday-november">
                      Wednesday, November 09, 2022
                    </div>
                  </div>
                </div>
                <div className="frame-43">
                  <div className="text-wrapper-23">PAYROLL</div>
                  <div className="frame-44">
                    <div className="frame-45">
                      <div className="frame-46">
                        <div className="frame-47">
                          <div className="text-wrapper-24">BM</div>
                        </div>
                        <div className="text-wrapper-3">Badmus Kemis</div>
                      </div>
                    </div>
                    <div className="frame-48">
                      <div className="text-wrapper-23">ACTIVITY</div>
                      <div className="frame-49">
                        <div className="text-wrapper-3">
                          Paid November 2022 salary
                        </div>
                      </div>
                    </div>
                    <div className="frame-50">
                      <div className="text-wrapper-23">EMPLOYEE</div>
                      <div className="frame-49">
                        <div className="text-wrapper-3">52</div>
                      </div>
                    </div>
                    <div className="frame-51">
                      <div className="text-wrapper-23">TIME</div>
                      <div className="frame-49">
                        <div className="text-wrapper-3">16:15</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-43">
                  <div className="text-wrapper-23">EMPLOYEE MANAGEMENT</div>
                  <div className="frame-44">
                    <div className="frame-45">
                      <div className="frame-46">
                        <div className="frame-52" />
                        <div className="text-wrapper-3">Kalu Abasiama</div>
                      </div>
                    </div>
                    <div className="frame-48">
                      <div className="text-wrapper-23">ACTIVITY</div>
                      <div className="frame-49">
                        <div className="text-wrapper-3">Added new employee</div>
                      </div>
                    </div>
                    <div className="frame-51">
                      <div className="text-wrapper-23">EMPLOYEE</div>
                      <div className="frame-49">
                        <div className="text-wrapper-3">04</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="TRANSACTION-HISTORY-2">
                  <div className="saturday-november-wrapper">
                    <div className="saturday-november">
                      Friday, November 04, 2022
                    </div>
                  </div>
                </div>
                <div className="frame-43">
                  <div className="text-wrapper-23">BONUS</div>
                  <div className="frame-44">
                    <div className="frame-53">
                      <div className="frame-54">
                        <div className="frame-47">
                          <div className="text-wrapper-25">BM</div>
                        </div>
                        <div className="text-wrapper-3">Badmus Kemis</div>
                      </div>
                    </div>
                    <div className="frame-48">
                      <div className="text-wrapper-23">ACTIVITY</div>
                      <div className="frame-49">
                        <div className="text-wrapper-3">Added new bonus</div>
                      </div>
                    </div>
                    <div className="frame-51">
                      <div className="text-wrapper-26">BONUS NAME</div>
                      <div className="frame-49">
                        <div className="text-wrapper-3">XMAS Bonus</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-43">
                  <div className="text-wrapper-23">WALLET</div>
                  <div className="frame-44">
                    <div className="frame-53">
                      <div className="frame-54">
                        <div className="frame-47">
                          <div className="text-wrapper-25">BM</div>
                        </div>
                        <div className="text-wrapper-3">Badmus Kemis</div>
                      </div>
                    </div>
                    <div className="frame-48">
                      <div className="text-wrapper-23">ACTIVITY</div>
                      <div className="frame-49">
                        <div className="text-wrapper-3">
                          Paid November 2022, salary
                        </div>
                      </div>
                    </div>
                    <div className="frame-51">
                      <div className="text-wrapper-23">AMOUNT</div>
                      <div className="frame-49">
                        <div className="text-wrapper-27">N11,1678,900.00</div>
                      </div>
                    </div>
                    <div className="frame-51">
                      <div className="text-wrapper-23">TIME</div>
                      <div className="frame-49">
                        <div className="text-wrapper-3">15:31</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="TRANSACTION-HISTORY-2">
                  <div className="saturday-november-wrapper">
                    <div className="saturday-november">
                      Monday, October 30, 2022
                    </div>
                  </div>
                </div>
                <div className="frame-43">
                  <div className="text-wrapper-28">PAYROLL</div>
                  <div className="frame-44">
                    <div className="frame-45">
                      <div className="frame-46">
                        <div className="frame-47">
                          <div className="text-wrapper-24">BM</div>
                        </div>
                        <div className="text-wrapper-29">Badmus Kemis</div>
                      </div>
                    </div>
                    <div className="frame-48">
                      <div className="text-wrapper-28">ACTIVITY</div>
                      <div className="frame-49">
                        <div className="text-wrapper-29">Paid XMAS bonus</div>
                      </div>
                    </div>
                    <div className="frame-50">
                      <div className="text-wrapper-28">EMPLOYEE</div>
                      <div className="frame-49">
                        <div className="text-wrapper-29">52</div>
                      </div>
                    </div>
                    <div className="frame-51">
                      <div className="text-wrapper-28">TIME</div>
                      <div className="frame-49">
                        <div className="text-wrapper-29">10:15</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Scroll
                className="SCROLL-instance"
                img="https://c.animaapp.com/ALsvK82i/img/polygon-3.svg"
                polygon="https://c.animaapp.com/ALsvK82i/img/polygon-2.svg"
                rectangleClassName="design-component-instance-node"
              />
            </div>
          </div>
        </div>
        <div className="text-wrapper-30">RS</div>
        <div className="new-side-nav">
          <div className="overlap-group-wrapper">
            <div className="overlap-group-3">
              <img
                className="mask-group"
                alt="Mask group"
                src="https://c.animaapp.com/ALsvK82i/img/mask-group@2x.png"
              />
              <EazipayLogoNew1 className="EAZIPAY-LOGO-NEW" />
            </div>
          </div>
          <div className="frame-55">
            <div className="frame-56">
              <div className="frame-57">
                <div className="component">
                  <div className="frame-58">
                    <img
                      className="tif"
                      alt="Tif"
                      src="https://c.animaapp.com/ALsvK82i/img/i974z9-tif-1-@2x.png"
                    />
                    <div className="text-wrapper-31">Dashboard</div>
                  </div>
                  <div className="rectangle-4" />
                  <ArrowChevronRightWrapper />
                </div>
                <div className="component-2">
                  <div className="frame-58">
                    <img
                      className="interface-wallet"
                      alt="Interface wallet"
                      src="https://c.animaapp.com/ALsvK82i/img/interface---wallet.svg"
                    />
                    <div className="text-wrapper-10">Wallet</div>
                  </div>
                  <ArrowChevronRightWrapper />
                </div>
                <div className="component-3">
                  <div className="frame-58">
                    <HeroiconsOutline className="heroicons-outline-instance" />
                    <div className="text-wrapper-10">Employee Management</div>
                  </div>
                  <ArrowChevronRight
                    className="arrow-chevron-right-4"
                    color="#515251"
                  />
                </div>
                <div className="component-3">
                  <div className="frame-58">
                    <img
                      className="group"
                      alt="Group"
                      src="https://c.animaapp.com/ALsvK82i/img/group-2@2x.png"
                    />
                    <div className="text-wrapper-10">Payroll</div>
                  </div>
                  <ArrowChevronRight
                    className="arrow-chevron-right-instance"
                    color="#515251"
                  />
                </div>
                <div className="component-3">
                  <div className="frame-58">
                    <HeroiconsOutlineWrapper className="heroicons-outline-clipboard-document-check" />
                    <div className="text-wrapper-10">Compliance</div>
                  </div>
                  <ArrowChevronRight
                    className="arrow-chevron-right-instance"
                    color="#8D8E8D"
                  />
                </div>
                <div className="component-3">
                  <div className="frame-58">
                    <img
                      className="frame-59"
                      alt="Frame"
                      src="https://c.animaapp.com/ALsvK82i/img/frame.svg"
                    />
                    <div className="text-wrapper-10">Quick Loan</div>
                  </div>
                  <ArrowChevronRight
                    className="arrow-chevron-right-instance"
                    color="#515251"
                  />
                </div>
                <div className="component-4">
                  <div className="frame-58">
                    <EducationOpenBook className="icon-instance-node-2" />
                    <div className="text-wrapper-10">Book Keeping</div>
                  </div>
                  <ArrowChevronRight
                    className="arrow-chevron-right-instance"
                    color="#515251"
                  />
                </div>
              </div>
              <img
                className="line-8"
                alt="Line"
                src="https://c.animaapp.com/ALsvK82i/img/line-60.svg"
              />
              <div className="frame-51">
                <div className="component-2">
                  <div className="frame-58">
                    <CommunicationCall className="icon-instance-node-2" />
                    <div className="text-wrapper-10">Support</div>
                  </div>
                  <img
                    className="arrow-chevron-right-2"
                    alt="Arrow chevron right"
                    src="https://c.animaapp.com/ALsvK82i/img/arrow---chevron-right-8@2x.png"
                  />
                </div>
                <div className="component-4">
                  <div className="frame-58">
                    <img
                      className="icon-instance-node-2"
                      alt="Material symbols"
                      src="https://c.animaapp.com/ALsvK82i/img/material-symbols-settings-outline.svg"
                    />
                    <div className="text-wrapper-10">Settings</div>
                  </div>
                  <ArrowChevronRight
                    className="arrow-chevron-right-instance"
                    color="#515251"
                  />
                </div>
              </div>
            </div>
            <img
              className="frame-60"
              alt="Frame"
              src="https://c.animaapp.com/ALsvK82i/img/arrow---chevron-right-8@2x.png"
            />
            <img
              className="frame-61"
              alt="Frame"
              src="https://c.animaapp.com/ALsvK82i/img/arrow---chevron-right-8@2x.png"
            />
          </div>
        </div>
        <div className="new-top-NAV-BAR">
          <div className="company-logo" />
          <div className="nav-bar-profile">
            <div className="ICON-NOTIFICATION">
              <img
                className="vector-4"
                alt="Vector"
                src="https://c.animaapp.com/ALsvK82i/img/vector.svg"
              />
              <div className="frame-62">
                <div className="text-wrapper-32">7</div>
              </div>
            </div>
            <div className="frame-63">
              <div className="frame-64">
                <img
                  className="ellipse-3"
                  alt="Ellipse"
                  src="https://c.animaapp.com/ALsvK82i/img/ellipse-12@2x.png"
                />
                <div className="frame-51">
                  <div className="text-wrapper-33">Kalu Abasiama</div>
                  <div className="text-wrapper-34">Admin</div>
                </div>
              </div>
              <img
                className="icon-instance-node"
                alt="Arrows upper arrow"
                src="https://c.animaapp.com/ALsvK82i/img/arrows---upper-arrow.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
