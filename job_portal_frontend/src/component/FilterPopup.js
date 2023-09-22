import styles from "./FilterPopup.module.css";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

const FilterPopup = (props) => {
  const { open, handleClose, searchOptions, setSearchOptions, getData } = props;

  const changeSearchOptions = (event) => {
    setSearchOptions({
      ...searchOptions,
      jobType: {
        ...searchOptions.jobType,
        [event.target.name]: event.target.checked,
      },
    });
  };
  return (
    <div className={`${styles.Modal} ${open ? styles.showModal : ""}`}>
      <div className={styles.FilterBox}>
        <div className={styles.InputRow}>
          <div className={styles.InputField}>Job Type</div>
          <div className={`${styles.InputValue} ${styles.CheckboxInput}`}>
            <div className={styles.CheckBox}>
              <input
                type="checkbox"
                name="fullTime"
                checked={searchOptions.jobType.fullTime}
                onChange={(e) => {
                  changeSearchOptions(e);
                }}
              />
              Full Time
            </div>

            <div className={styles.CheckBox}>
              <input
                type="checkbox"
                name="partTime"
                checked={searchOptions.jobType.partTime}
                onChange={(e) => {
                  changeSearchOptions(e);
                }}
              />
              Part Time
            </div>

            <div className={styles.CheckBox}>
              <input
                type="checkbox"
                name="wfh"
                checked={searchOptions.jobType.wfh}
                onChange={(e) => {
                  changeSearchOptions(e);
                }}
              />
              Work From Home
            </div>
          </div>
        </div>
        <div className={styles.InputRow}>
          <div className={styles.InputField}>Salary</div>
          <div className={`${styles.InputValue} ${styles.RangeInput}`}>
            <div className={styles.RangeBar}>
              <input
                type="range"
                min="0"
                max="100000"
                value={searchOptions.salary}
                onChange={(event, value) =>
                  setSearchOptions({
                    ...searchOptions,
                    salary: value,
                  })
                }
                style={{ width: "100%" }}
              />
            </div>
            <div className={styles.RangeValue}>
              <div>0</div>
              <div>1000000</div>
            </div>
          </div>
        </div>
        <div className={styles.InputRow}>
          <div className={styles.InputField}>Duration</div>
          <div className={`${styles.InputValue} ${styles.SelectInput}`}>
            <select
              defaultValue={searchOptions.duration}
              onChange={(event) =>
                setSearchOptions({
                  ...searchOptions,
                  duration: event.target.value,
                })
              }
            >
              <option value="0">All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
        </div>
        <div className={styles.InputRow}>
          <div className={styles.InputField}>Sort</div>
          <div className={`${styles.InputValue} ${styles.SortInput}`}>
            <div className={styles.SortCheckBox}>
              <input
                type="checkbox"
                name="salary"
                checked={searchOptions.sort.salary.status}
                onChange={(event) =>
                  setSearchOptions({
                    ...searchOptions,
                    sort: {
                      ...searchOptions.sort,
                      salary: {
                        ...searchOptions.sort.salary,
                        status: event.target.checked,
                      },
                    },
                  })
                }
              />
              <div>Salary</div>
              <div>
                {" "}
                {searchOptions.sort.salary.status ? (
                  <ArrowDownwardIcon />
                ) : (
                  <ArrowUpwardIcon />
                )}{" "}
              </div>
            </div>
            <div className={styles.SortCheckBox}>
              <input
                type="checkbox"
                name="duration"
                checked={searchOptions.sort.duration.status}
                onChange={(event) =>
                  setSearchOptions({
                    ...searchOptions,
                    sort: {
                      ...searchOptions.sort,
                      duration: {
                        ...searchOptions.sort.duration,
                        status: event.target.checked,
                      },
                    },
                  })
                }
              />
              <div>Duration</div>
              <div>
                {" "}
                {searchOptions.sort.duration.status ? (
                  <ArrowDownwardIcon />
                ) : (
                  <ArrowUpwardIcon />
                )}{" "}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.InputRow}>
          <button className={styles.ApplyButton} onClick={() => getData()}>Apply</button>
        </div>
      </div>
    </div>
  );
};

export default FilterPopup;
