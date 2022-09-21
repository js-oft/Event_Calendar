import Calendar from "./components/Calendar";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Calendar
        month={9}
        year={2022}
        preloadedEvents={[
          {
            id: 1,

            dateFrom: "2022-09-02T12:00",
            dateTo: "2022-09-03T08:45",
            type: "business_activities"
          },
          {
            id: 143,

            dateFrom: "2022-09-02T12:00",
            dateTo: "2022-09-03T08:45",
            type: "personal_schudle"
          },
          {
            id: 144,

            dateFrom: "2022-09-02T12:00",
            dateTo: "2022-09-03T08:45",
            type: "team_schudle"
          },
          {
            id: 2,

            dateFrom: "2022-09-05T09:45",
            dateTo: "2022-09-06T22:00",
            type: "personal_schudle"
          },
          {
            id: 3,

            dateFrom: "2022-09-09T01:00",
            dateTo: "2022-09-10T23:59",
            type: "team_schudle"
          },
          {
            id: 4,

            dateFrom: "2022-09-19T07:30",
            dateTo: "2022-09-21T23:59",
            type: "business_activities"
          },
          {
            id: 5,

            dateFrom: "2022-09-14T08:00",
            dateTo: "2022-09-16T23:59",
            type: "personal_schudle"
          },
          {
            id: 6,
            dateFrom: "2022-09-26T08:00",
            dateTo: "2022-09-27T23:59",
            type: "team_schudle"
          }
        ]}
      />
    </div>
  );
}
