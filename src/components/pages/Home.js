import React, { useCallback, useContext, useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import {
  BarChart,
  Gauge,
  gaugeClasses,
  LineChart,
  lineElementClasses,
} from "@mui/x-charts";
import { colors } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [dashboardData, setDashboardData] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    const data = await axios.get(
      `http://localhost:5500/api/v1/auth/getDashboard`
    );
    setDashboardData(data?.data?.data[0]);
    console.log(data?.data?.data[0]);
    console.log(dashboardData?.csBreakDownPercentage?.chart);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const uData = dashboardData?.customerSatisfactionScore?.chart?.yLabel
    ? dashboardData?.customerSatisfactionScore?.chart?.yLabel
    : [];

  const tData = dashboardData?.averageResponseTime?.chart?.yLabel
    ? dashboardData?.averageResponseTime?.chart?.yLabel
    : [];

  const xLabels = dashboardData?.customerSatisfactionScore?.chart?.xLabel
    ? dashboardData?.customerSatisfactionScore?.chart?.xLabel
    : [];

  const natural = dashboardData?.csBreakDownPercentage?.chart?.natural
    ? dashboardData?.csBreakDownPercentage?.chart?.natural
    : [];
  const satisfied = dashboardData?.csBreakDownPercentage?.chart?.satisfied
    ? dashboardData?.csBreakDownPercentage?.chart?.satisfied
    : [];
  const unSatisfied = dashboardData?.csBreakDownPercentage?.chart?.unSatisfied
    ? dashboardData?.csBreakDownPercentage?.chart?.unSatisfied
    : [];
  const verySatisfied = dashboardData?.csBreakDownPercentage?.chart
    ?.verySatisfied
    ? dashboardData?.csBreakDownPercentage?.chart?.verySatisfied
    : [];
  const veryUnSatisfied = dashboardData?.csBreakDownPercentage?.chart
    ?.veryUnSatisfied
    ? dashboardData?.csBreakDownPercentage?.chart?.veryUnSatisfied
    : [];
  const sLabel = dashboardData?.csBreakDownPercentage?.chart?.xLabel
    ? dashboardData?.csBreakDownPercentage?.chart?.xLabel
    : [];

  return (
    <div>
      <div className="container-fluid p-3 text-light pt-4">
        <div className="row mt-2">
          <div className="col-12 col-md-9">
            <div className="row mb-2">
              <div className="col-12 col-md-3">
                <div
                  className="bg-subcard text-center"
                  onClick={() => navigate(`/kpi-Details`)}
                >
                  <h3>{dashboardData?.title}</h3>
                  <h4>{dashboardData?.subTitle}</h4>
                </div>
              </div>
              <div className="col-12 col-md-9">
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="bg-subcard">
                      <h6>{dashboardData?.averageResponseTime?.title}</h6>
                      <div className="d-flex justify-content-between">
                        <div>
                          <div>
                            <span className="fs-4 fw-bold">
                              {dashboardData?.averageResponseTime?.lastMonth}{" "}
                            </span>
                            <span className="fw-bold f-14">hr</span>
                            <p className="f-12 mt-0">Last Month</p>
                          </div>
                          <div>
                            <span className="fs-4 fw-bold">
                              {dashboardData?.averageResponseTime?.currentMonth}{" "}
                            </span>
                            <span className="fw-bold f-14">hr</span>
                            <p className="f-12 mt-0">Current Month</p>
                          </div>
                        </div>
                        <div className="text-center border border-4 px-2 py-0 rounded-3 border-danger">
                          <div>
                            <i class="bi bi-caret-down-fill text-danger fs-1"></i>
                          </div>
                          <span className="fs-4 fw-bold">
                            {dashboardData?.averageResponseTime?.value}
                          </span>
                          <span className="fw-bold f-14 ms-2">hr</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="bg-subcard">
                      <h6>{dashboardData?.customerSatisfactionScore?.title}</h6>
                      <div className="d-flex justify-content-between">
                        <div>
                          <div>
                            <span className="fs-4 fw-bold">
                              {
                                dashboardData?.customerSatisfactionScore
                                  ?.lastMonth
                              }
                            </span>
                            <span className="fw-bold f-14">%</span>
                            <p className="f-12 mt-0">Last Month</p>
                          </div>
                          <div>
                            <span className="fs-4 fw-bold">
                              {
                                dashboardData?.customerSatisfactionScore
                                  ?.currentMonth
                              }
                            </span>
                            <span className="fw-bold f-14">%</span>
                            <p className="f-12 mt-0">Current Month</p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center border border-4 px-4 py-0 rounded-3 border-danger">
                          <div>
                            <span className="fs-4 fw-bold">
                              {dashboardData?.customerSatisfactionScore?.value}
                            </span>
                            <span className="fw-bold f-14">%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-12 col-md-4">
                <div className="bg-subcard">
                  <h6>
                    {dashboardData?.customerSatisfactionScore?.csatScore?.title}
                  </h6>
                  <div className="d-flex justify-content-between align-items-end">
                    <Gauge
                      width={150}
                      height={150}
                      value={
                        dashboardData?.customerSatisfactionScore?.csatScore
                          ?.score
                      }
                      color="white"
                      sx={{
                        [`& .${gaugeClasses.valueText}`]: {
                          fontSize: 0,
                          transform: "translate(0px, 0px)",
                          fontWeight: "bold",
                        },
                        [`& .${gaugeClasses.valueArc}`]: {
                          fill: "#5DC1F1",
                        },
                      }}
                    ></Gauge>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h4>
                      {
                        dashboardData?.customerSatisfactionScore?.csatScore
                          ?.score
                      }
                      %
                    </h4>
                    <h4>
                      {
                        dashboardData?.customerSatisfactionScore?.csatScore
                          ?.remain
                      }
                      %
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="bg-subcard">
                  <h6>
                    {
                      dashboardData?.customerSatisfactionScore?.cEffortScore
                        ?.title
                    }
                  </h6>
                  <div className="position-relative">
                    <div className="d-flex justify-content-center">
                      <Gauge
                        width={200}
                        height={150}
                        value={
                          dashboardData?.customerSatisfactionScore?.cEffortScore
                            ?.score
                        }
                        startAngle={-90}
                        endAngle={90}
                        color="white"
                        sx={{
                          [`& .${gaugeClasses.valueText}`]: {
                            fontSize: 0,
                            transform: "translate(0px, 0px)",
                            fontWeight: "bold",
                          },
                          [`& .${gaugeClasses.valueArc}`]: {
                            fill: "#5DC1F1",
                          },
                        }}
                      />
                    </div>
                    <i
                      className="bi bi-router-fill fs-5 bg-secondary rounded-circle py-2 px-3 position-absolute"
                      style={{ top: 90, left: 110 }}
                    ></i>
                  </div>
                  <h4>
                    {
                      dashboardData?.customerSatisfactionScore?.cEffortScore
                        ?.score
                    }
                    %
                  </h4>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="bg-subcard">
                  <h6>{dashboardData?.netPrometerScore?.title}</h6>
                  <div className="position-relative">
                    <div className="d-flex justify-content-center">
                      <Gauge
                        width={200}
                        height={150}
                        value={dashboardData?.netPrometerScore?.score}
                        startAngle={-90}
                        endAngle={90}
                        color="white"
                        sx={{
                          [`& .${gaugeClasses.valueText}`]: {
                            fontSize: 0,
                            transform: "translate(0px, 0px)",
                            fontWeight: "bold",
                          },
                          [`& .${gaugeClasses.valueArc}`]: {
                            fill: "#5DC1F1",
                          },
                        }}
                      />
                    </div>
                    <i
                      className="bi bi-hand-index-thumb-fill fs-5 bg-secondary rounded-circle py-2 px-3 position-absolute"
                      style={{ top: 90, left: 110 }}
                    ></i>
                  </div>
                  <h4>{dashboardData?.netPrometerScore?.score}%</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="bg-subcard">
              {dashboardData?.emogiCard?.map((item, index) => (
                <div className="d-flex align-items-center p-2 border-bottom">
                  <i
                    className={`${item?.icon}`}
                    style={{ color: `${item?.color}`, fontSize: "60px" }}
                  ></i>
                  <div className="ms-4">
                    <span className="fs-4 fw-bolder">{item?.value}</span>
                    <span className="fw-bold f-14 ms-2">%</span>
                    <p className="f-14 mt-0">{item?.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 col-md-4">
            <div className="bg-subcard">
              <h6>{dashboardData?.csBreakDownPercentage?.title}</h6>
              <BarChart
                width={400}
                height={300}
                series={[
                  {
                    data: natural,
                    label: "Natural",
                    id: "naturalId",
                    stack: "total",
                  },
                  {
                    data: satisfied,
                    label: "Satisfied",
                    id: "satisfiedId",
                    stack: "total",
                  },
                  {
                    data: unSatisfied,
                    label: "Unsatisfied",
                    id: "unsatisfiedId",
                    stack: "total",
                  },
                  {
                    data: verySatisfied,
                    label: "VerySatisfied",
                    id: "verySatisfiedId",
                    stack: "total",
                  },
                  {
                    data: veryUnSatisfied,
                    label: "VeryUnSatisfied",
                    id: "veryUnSatisfiedId",
                    stack: "total",
                  },
                ]}
                xAxis={[
                  {
                    scaleType: "band",
                    data: sLabel,
                    categoryGapRatio: 0.5,
                    barGapRatio: 0.1,
                  },
                ]}
              />
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="bg-subcard">
              <h6>{dashboardData?.averageResponseTime?.title} Over Month</h6>
              <LineChart
                width={400}
                height={300}
                sx={{
                  [`& .${lineElementClasses.root}`]: {
                    stroke: "#5DC1F1",
                  },
                }}
                series={[
                  {
                    data: tData,
                    label: "Average Response Rate",
                    area: false,
                    showMark: true,
                    fill : '#5DC1F1'
                  },
                ]}
                xAxis={[{ scaleType: "point", data: xLabels }]}
              />
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="bg-subcard">
              <h6>
                {dashboardData?.customerSatisfactionScore?.title} Over Month
              </h6>
              <LineChart
                width={400}
                height={300}
                series={[
                  { data: uData, label: "CSAT", area: true, showMark: false },
                ]}
                xAxis={[{ scaleType: "point", data: xLabels }]}
                sx={{
                  [`& .${lineElementClasses.root}`]: {
                    display: "none",
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
