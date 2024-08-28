import { BarChart } from "@mui/x-charts";
import axios from "axios";
import React, { useEffect, useState } from "react";

const DetailsComponet = () => {
  const [detailsData, setDetailsData] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(`http://localhost:5500/api/v1/auth/getDetails`);
    console.log(res?.data?.data);
    setDetailsData(res?.data?.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="mt-2 p-4">
        <div className="row">
          {detailsData?.map((item, index) => (
            <div className="col-12 col-md-6 mt-3" key={index}>
              <div className="bg-subcard text-light">
                <div className="d-flex justify-content-between">
                  <span className="f-16">{item?.title}</span>
                  <span className="f-16">{item?.subTitle}</span>
                </div>
                <div className="row">
                  <div className="col-12 col-md-5">
                    <div className="mt-4 mb-3">
                      {item?.revDetails?.map((val, key) => (
                        <div className="row p-2" key={key}>
                          <div className="col-7 text-end">
                            <span className="fs-4 fw-medium">{val?.value}</span>
                          </div>
                          <div className="col-5 ps-2">
                            <span className="f-14 fw-medium">{val?.name}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-12 col-md-7">
                    <BarChart
                      width={350}
                      height={300}
                      colors={item?.chart?.color}
                      series={[
                        {
                          data: item?.chart?.currentYear,
                          label: "Current Year",
                          id: "currentYearId",
                        },
                        {
                          data: item?.chart?.previousYear,
                          label: "Previous Year",
                          id: "peviousYearId",
                        },
                      ]}
                      xAxis={[
                        {
                          scaleType: "band",
                          data: item?.chart?.xLabel,
                          categoryGapRatio: 0.5,
                          barGapRatio: 0.1,
                        },
                      ]}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row mt-3">
          {detailsData?.map((ele, digit) => (
            <div className="col-12 col-md-3">
              <div className="text-light" style={{ backgroundColor : `${ele?.color?.light}`}}> 
                <div style={{ backgroundColor : `${ele?.color?.dark}`}}>
                  <h6 className="text-uppercase text-center p-2">{ele?.name}</h6>
                </div>
                <div>
                  <h2 className="fs-3 text-center p-2">{ele?.total}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailsComponet;
