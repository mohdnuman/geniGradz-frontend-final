import React from "react";

const TotalRevenue = () => {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <div className="dropdown float-end">
            <a
              href="#"
              className="dropdown-toggle arrow-none card-drop"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="mdi mdi-dots-vertical"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-end">
              <a href="#" className="dropdown-item">
                Action
              </a>

              <a href="#" className="dropdown-item">
                Another action
              </a>

              <a href="#" className="dropdown-item">
                Something else
              </a>

              <a href="#" className="dropdown-item">
                Separated link
              </a>
            </div>
          </div>
          <h4 className="header-title mt-0">Total Revenue</h4>
          <div class="list-group">
            <a
              href="#"
              class="list-group-item list-group-item-action active"
              aria-current="true"
            >
              <div>
                <span style={{ color: "orange" }}>
                  <i class="fa-thin fa-notebook"></i>
                </span>
              </div>
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">List group item heading</h5>
                <small>3 days ago</small>
              </div>
              <p class="mb-1">Some placeholder content in a paragraph.</p>
              <small>And some small print.</small>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <div class="d-flex w-100 justify-content-between">
                <div>
                  <span style={{ color: "orange" }}>
                    <i className="fa-solid fa-book-open-cover"></i>
                  </span>
                </div>
                <h5 class="mb-1">List group item heading</h5>
                <small class="text-muted">3 days ago</small>
              </div>
              <p class="mb-1">Some placeholder content in a paragraph.</p>
              <small class="text-muted">And some muted small print.</small>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">List group item heading</h5>
                <small class="text-muted">3 days ago</small>
              </div>
              <p class="mb-1">Some placeholder content in a paragraph.</p>
              <small class="text-muted">And some muted small print.</small>
            </a>
          </div>

          {/* <div
                      id="morris-line-example"
                      dir="ltr"
                      style={{
                        height: "280px",
                        position: "relative",
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                      }}
                      className="morris-chart"
                    >
                      <svg
                        height="280"
                        version="1.1"
                        width="705"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        style={{
                          overflow: "hidden",
                          position: "relative",
                          left: "-0.775px",
                          top: "-0.8px",
                        }}
                      >
                        <desc
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                        >
                          Created with Raphaël 2.3.0
                        </desc>
                        <defs
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                        ></defs>
                        <text
                          x="30.787988662719727"
                          y="240.5999994277954"
                          textAnchor="end"
                          fontFamily="sans-serif"
                          fontSize="12px"
                          stroke="none"
                          fill="#888888"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            textAnchor: "end",
                            fontFamily: "sans-serif",
                            fontSize: "12px",
                            fontWeight: "normal",
                          }}
                          fontWeight="normal"
                        >
                          <tspan
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                            dy="3.9999899864196777"
                          >
                            0
                          </tspan>
                        </text>
                        <path
                          fill="none"
                          stroke="#adb5bd"
                          d="M43.28798866271973,240.5H680"
                          strokeOpacity="0.1"
                          strokeWidth="0.5"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                        ></path>
                        <text
                          x="30.787988662719727"
                          y="186.69999957084656"
                          textAnchor="end"
                          fontFamily="sans-serif"
                          fontSize="12px"
                          stroke="none"
                          fill="#888888"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            textAnchor: "end",
                            fontFamily: "sans-serif",
                            fontSize: "12px",
                            fontWeight: "normal",
                          }}
                          fontWeight="normal"
                        >
                          <tspan
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                            dy="3.9999992847442627"
                          >
                            25
                          </tspan>
                        </text>
                        <path
                          fill="none"
                          stroke="#adb5bd"
                          d="M43.28798866271973,186.5H680"
                          strokeOpacity="0.1"
                          strokeWidth="0.5"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                        ></path>
                        <text
                          x="30.787988662719727"
                          y="132.7999997138977"
                          textAnchor="end"
                          fontFamily="sans-serif"
                          fontSize="12px"
                          stroke="none"
                          fill="#888888"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            textAnchor: "end",
                            fontFamily: "sans-serif",
                            fontSize: "12px",
                            fontWeight: "normal",
                          }}
                          fontWeight="normal"
                        >
                          <tspan
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                            dy="4.000000953674316"
                          >
                            50
                          </tspan>
                        </text>
                        <path
                          fill="none"
                          stroke="#adb5bd"
                          d="M43.28798866271973,132.5H680"
                          strokeOpacity="0.1"
                          strokeWidth="0.5"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                        ></path>
                        <text
                          x="30.787988662719727"
                          y="78.89999985694885"
                          textAnchor="end"
                          fontFamily="sans-serif"
                          fontSize="12px"
                          stroke="none"
                          fill="#888888"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            textAnchor: "end",
                            fontFamily: "sans-serif",
                            fontSize: "12px",
                            fontWeight: "normal",
                          }}
                          fontWeight="normal"
                        >
                          <tspan
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                            dy="3.999994993209839"
                          >
                            75
                          </tspan>
                        </text>
                        <path
                          fill="none"
                          stroke="#adb5bd"
                          d="M43.28798866271973,78.5H680"
                          strokeOpacity="0.1"
                          strokeWidth="0.5"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                        ></path>
                        <text
                          x="30.787988662719727"
                          y="25"
                          textAnchor="end"
                          fontFamily="sans-serif"
                          fontSize="12px"
                          stroke="none"
                          fill="#888888"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            textAnchor: "end",
                            fontFamily: "sans-serif",
                            fontSize: "12px",
                            fontWeight: "normal",
                          }}
                          fontWeight="normal"
                        >
                          <tspan
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                            dy="3.999999523162842"
                          >
                            100
                          </tspan>
                        </text>
                        <path
                          fill="none"
                          stroke="#adb5bd"
                          d="M43.28798866271973,25.5H680"
                          strokeOpacity="0.1"
                          strokeWidth="0.5"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                        ></path>
                        <text
                          x="680"
                          y="253.0999994277954"
                          textAnchor="middle"
                          fontFamily="sans-serif"
                          fontSize="12px"
                          stroke="none"
                          fill="#888888"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            textAnchor: "middle",
                            fontFamily: "sans-serif",
                            fontSize: "12px",
                            fontWeight: "normal",
                          }}
                          fontWeight="normal"
                          transform="matrix(1,0,0,1,0,7.2)"
                        >
                          <tspan
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                            dy="3.9999899864196777"
                          >
                            2015
                          </tspan>
                        </text>
                        <text
                          x="589.1122862189646"
                          y="253.0999994277954"
                          textAnchor="middle"
                          fontFamily="sans-serif"
                          fontSize="12px"
                          stroke="none"
                          fill="#888888"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            textAnchor: "middle",
                            fontFamily: "sans-serif",
                            fontSize: "12px",
                            fontWeight: "normal",
                          }}
                          fontWeight="normal"
                          transform="matrix(1,0,0,1,0,7.2)"
                        >
                          <tspan
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                            dy="3.9999899864196777"
                          >
                            2014
                          </tspan>
                        </text>
                        <text
                          x="498.22457243792934"
                          y="253.0999994277954"
                          textAnchor="middle"
                          fontFamily="sans-serif"
                          fontSize="12px"
                          stroke="none"
                          fill="#888888"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            textAnchor: "middle",
                            fontFamily: "sans-serif",
                            fontSize: "12px",
                            fontWeight: "normal",
                          }}
                          fontWeight="normal"
                          transform="matrix(1,0,0,1,0,7.2)"
                        >
                          <tspan
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                            dy="3.9999899864196777"
                          >
                            2013
                          </tspan>
                        </text>
                        <text
                          x="407.0878512218775"
                          y="253.0999994277954"
                          textAnchor="middle"
                          fontFamily="sans-serif"
                          fontSize="12px"
                          stroke="none"
                          fill="#888888"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            textAnchor: "middle",
                            fontFamily: "sans-serif",
                            fontSize: "12px",
                            fontWeight: "normal",
                          }}
                          fontWeight="normal"
                          transform="matrix(1,0,0,1,0,7.2)"
                        >
                          <tspan
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                            dy="3.9999899864196777"
                          >
                            2012
                          </tspan>
                        </text>
                        <text
                          x="316.2001374408422"
                          y="253.0999994277954"
                          textAnchor="middle"
                          fontFamily="sans-serif"
                          fontSize="12px"
                          stroke="none"
                          fill="#888888"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            textAnchor: "middle",
                            fontFamily: "sans-serif",
                            fontSize: "12px",
                            fontWeight: "normal",
                          }}
                          fontWeight="normal"
                          transform="matrix(1,0,0,1,0,7.2)"
                        >
                          <tspan
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                            dy="3.9999899864196777"
                          >
                            2011
                          </tspan>
                        </text>
                        <text
                          x="225.31242365980688"
                          y="253.0999994277954"
                          textAnchor="middle"
                          fontFamily="sans-serif"
                          fontSize="12px"
                          stroke="none"
                          fill="#888888"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            textAnchor: "middle",
                            fontFamily: "sans-serif",
                            fontSize: "12px",
                            fontWeight: "normal",
                          }}
                          fontWeight="normal"
                          transform="matrix(1,0,0,1,0,7.2)"
                        >
                          <tspan
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                            dy="3.9999899864196777"
                          >
                            2010
                          </tspan>
                        </text>
                        <text
                          x="134.42470987877158"
                          y="253.0999994277954"
                          textAnchor="middle"
                          fontFamily="sans-serif"
                          fontSize="12px"
                          stroke="none"
                          fill="#888888"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            textAnchor: "middle",
                            fontFamily: "sans-serif",
                            fontSize: "12px",
                            fontWeight: "normal",
                          }}
                          fontWeight="normal"
                          transform="matrix(1,0,0,1,0,7.2)"
                        >
                          <tspan
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                            dy="3.9999899864196777"
                          >
                            2009
                          </tspan>
                        </text>
                        <text
                          x="43.28798866271973"
                          y="253.0999994277954"
                          textAnchor="middle"
                          fontFamily="sans-serif"
                          fontSize="12px"
                          stroke="none"
                          fill="#888888"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            textAnchor: "middle",
                            fontFamily: "sans-serif",
                            fontSize: "12px",
                            fontWeight: "normal",
                          }}
                          fontWeight="normal"
                          transform="matrix(1,0,0,1,0,7.2)"
                        >
                          <tspan
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                            dy="3.9999899864196777"
                          >
                            2008
                          </tspan>
                        </text>
                        <path
                          fill="none"
                          stroke="#188ae2"
                          d="M43.28798866271973,240.5999994277954C66.07216896673269,213.64999949932098,111.64052957475862,154.38949350064823,134.42470987877158,132.7999997138977C157.1466383240304,111.26949361508913,202.59049521454807,68.11999988555908,225.31242365980688,68.11999988555908C248.0343521050657,68.11999988555908,293.4782089955834,113.9349997639656,316.2001374408422,132.7999997138977C338.922065886101,151.6649996638298,384.3659227766187,216.3486862226648,407.0878512218775,219.03999948501587C429.87203152589046,221.7386862083597,475.44039213391636,165.1547465500525,498.22457243792934,154.35999965667725C520.9465008831882,143.59474660727295,566.3903577737058,140.88499969244003,589.1122862189646,132.7999997138977C611.8342146642235,124.71499973535538,657.2780715547411,100.4599997997284,680,89.67999982833862"
                          strokeWidth="3"
                          className="line_1"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                        ></path>
                        <path
                          fill="none"
                          stroke="#10c469"
                          d="M43.28798866271973,132.7999997138977C66.07216896673269,119.32499974966049,111.64052957475862,73.50262641026123,134.42470987877158,78.89999985694885C157.1466383240304,84.282626381651,202.59049521454807,169.18249961733818,225.31242365980688,175.9199995994568C248.0343521050657,182.6574995815754,293.4782089955834,144.9274996817112,316.2001374408422,132.7999997138977C338.922065886101,120.67249974608421,384.3659227766187,78.89999985694885,407.0878512218775,78.89999985694885C429.87203152589046,78.89999985694885,475.44039213391636,132.7999997138977,498.22457243792934,132.7999997138977C520.9465008831882,132.7999997138977,566.3903577737058,92.37499982118607,589.1122862189646,78.89999985694885C611.8342146642235,65.42499989271164,657.2780715547411,38.47499996423721,680,25"
                          strokeWidth="3"
                          className="line_0"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                        ></path>
                        <circle
                          cx="43.28798866271973"
                          cy="240.5999994277954"
                          r="0"
                          fill="#ffffff"
                          stroke="#999999"
                          strokeWidth="1"
                          className="circle_line_1"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                        ></circle>
                        <circle
                          cx="134.42470987877158"
                          cy="132.7999997138977"
                          r="0"
                          fill="#ffffff"
                          stroke="#999999"
                          strokeWidth="1"
                          className="circle_line_1"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                        ></circle>
                        <circle
                          cx="225.31242365980688"
                          cy="68.11999988555908"
                          r="0"
                          fill="#ffffff"
                          stroke="#999999"
                          strokeWidth="1"
                          className="circle_line_1"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                        ></circle>
                        <circle
                          cx="316.2001374408422"
                          cy="132.7999997138977"
                          r="0"
                          fill="#ffffff"
                          stroke="#999999"
                          strokeWidth="1"
                          className="circle_line_1"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                        ></circle>
                        <circle
                          cx="407.0878512218775"
                          cy="219.03999948501587"
                          r="0"
                          fill="#ffffff"
                          stroke="#999999"
                          strokeWidth="1"
                          className="circle_line_1"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                        ></circle>
                        <circle
                          cx="498.22457243792934"
                          cy="154.35999965667725"
                          r="0"
                          fill="#ffffff"
                          stroke="#999999"
                          strokeWidth="1"
                          className="circle_line_1"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                        ></circle>
                        <circle
                          cx="589.1122862189646"
                          cy="132.7999997138977"
                          r="0"
                          fill="#ffffff"
                          stroke="#999999"
                          strokeWidth="1"
                          className="circle_line_1"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                        ></circle>
                        <circle
                          cx="680"
                          cy="89.67999982833862"
                          r="0"
                          fill="#ffffff"
                          stroke="#999999"
                          strokeWidth="1"
                          className="circle_line_1"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                        ></circle>
                        <circle
                          cx="43.28798866271973"
                          cy="132.7999997138977"
                          r="0"
                          fill="#ffffff"
                          stroke="#999999"
                          strokeWidth="1"
                          className="circle_line_0"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                        ></circle>
                        <circle
                          cx="134.42470987877158"
                          cy="78.89999985694885"
                          r="0"
                          fill="#ffffff"
                          stroke="#999999"
                          strokeWidth="1"
                          className="circle_line_0"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                        ></circle>
                        <circle
                          cx="225.31242365980688"
                          cy="175.9199995994568"
                          r="0"
                          fill="#ffffff"
                          stroke="#999999"
                          strokeWidth="1"
                          className="circle_line_0"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                        ></circle>
                        <circle
                          cx="316.2001374408422"
                          cy="132.7999997138977"
                          r="0"
                          fill="#ffffff"
                          stroke="#999999"
                          strokeWidth="1"
                          className="circle_line_0"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                        ></circle>
                        <circle
                          cx="407.0878512218775"
                          cy="78.89999985694885"
                          r="0"
                          fill="#ffffff"
                          stroke="#999999"
                          strokeWidth="1"
                          className="circle_line_0"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                        ></circle>
                        <circle
                          cx="498.22457243792934"
                          cy="132.7999997138977"
                          r="0"
                          fill="#ffffff"
                          stroke="#999999"
                          strokeWidth="1"
                          className="circle_line_0"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                        ></circle>
                        <circle
                          cx="589.1122862189646"
                          cy="78.89999985694885"
                          r="0"
                          fill="#ffffff"
                          stroke="#999999"
                          strokeWidth="1"
                          className="circle_line_0"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                        ></circle>
                        <circle
                          cx="680"
                          cy="25"
                          r="0"
                          fill="#ffffff"
                          stroke="#999999"
                          strokeWidth="1"
                          className="circle_line_0"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                        ></circle>
                      </svg>
                      <div
                        className="morris-hover morris-default-style"
                        style={{ display: "none" }}
                      ></div>
                    </div> */}
        </div>
      </div>
    </div>
  );
};

export default TotalRevenue;
