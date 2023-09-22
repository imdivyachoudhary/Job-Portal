const FilterPopup = (props) => {
    const classes = useStyles();
    const { open, handleClose, searchOptions, setSearchOptions, getData } = props;
    return (
      <Modal open={open} onClose={handleClose} className={classes.popupDialog}>
        <Paper
          style={{
            padding: "50px",
            outline: "none",
            minWidth: "50%",
          }}
        >
          <Grid container direction="column" alignItems="center" spacing={3}>
            <Grid container item alignItems="center">
              <Grid item xs={3}>
                Job Type
              </Grid>
              <Grid
                container
                item
                xs={9}
                justify="space-around"
                // alignItems="center"
              >
                <Grid item>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="fullTime"
                        checked={searchOptions.jobType.fullTime}
                        onChange={(event) => {
                          setSearchOptions({
                            ...searchOptions,
                            jobType: {
                              ...searchOptions.jobType,
                              [event.target.name]: event.target.checked,
                            },
                          });
                        }}
                      />
                    }
                    label="Full Time"
                  />
                </Grid>
                <Grid item>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="partTime"
                        checked={searchOptions.jobType.partTime}
                        onChange={(event) => {
                          setSearchOptions({
                            ...searchOptions,
                            jobType: {
                              ...searchOptions.jobType,
                              [event.target.name]: event.target.checked,
                            },
                          });
                        }}
                      />
                    }
                    label="Part Time"
                  />
                </Grid>
                <Grid item>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="wfh"
                        checked={searchOptions.jobType.wfh}
                        onChange={(event) => {
                          setSearchOptions({
                            ...searchOptions,
                            jobType: {
                              ...searchOptions.jobType,
                              [event.target.name]: event.target.checked,
                            },
                          });
                        }}
                      />
                    }
                    label="Work From Home"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid container item alignItems="center">
              <Grid item xs={3}>
                Salary
              </Grid>
              <Grid item xs={9}>
                <Slider
                  valueLabelDisplay="auto"
                  valueLabelFormat={(value) => {
                    return value * (100000 / 100);
                  }}
                  marks={[
                    { value: 0, label: "0" },
                    { value: 100, label: "100000" },
                  ]}
                  value={searchOptions.salary}
                  onChange={(event, value) =>
                    setSearchOptions({
                      ...searchOptions,
                      salary: value,
                    })
                  }
                />
              </Grid>
            </Grid>
            <Grid container item alignItems="center">
              <Grid item xs={3}>
                Duration
              </Grid>
              <Grid item xs={9}>
                <TextField
                  select
                  label="Duration"
                  variant="outlined"
                  fullWidth
                  value={searchOptions.duration}
                  onChange={(event) =>
                    setSearchOptions({
                      ...searchOptions,
                      duration: event.target.value,
                    })
                  }
                >
                  <MenuItem value="0">All</MenuItem>
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                  <MenuItem value="3">3</MenuItem>
                  <MenuItem value="4">4</MenuItem>
                  <MenuItem value="5">5</MenuItem>
                  <MenuItem value="6">6</MenuItem>
                  <MenuItem value="7">7</MenuItem>
                </TextField>
              </Grid>
            </Grid>
            <Grid container item alignItems="center">
              <Grid item xs={3}>
                Sort
              </Grid>
              <Grid item container direction="row" xs={9}>
                <Grid
                  item
                  container
                  xs={4}
                  justify="space-around"
                  alignItems="center"
                  style={{ border: "1px solid #D1D1D1", borderRadius: "5px" }}
                >
                  <Grid item>
                    <Checkbox
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
                      id="salary"
                    />
                  </Grid>
                  <Grid item>
                    <label for="salary">
                      <Typography>Salary</Typography>
                    </label>
                  </Grid>
                  <Grid item>
                    <IconButton
                      disabled={!searchOptions.sort.salary.status}
                      onClick={() => {
                        setSearchOptions({
                          ...searchOptions,
                          sort: {
                            ...searchOptions.sort,
                            salary: {
                              ...searchOptions.sort.salary,
                              desc: !searchOptions.sort.salary.desc,
                            },
                          },
                        });
                      }}
                    >
                      {searchOptions.sort.salary.desc ? (
                        <ArrowDownwardIcon />
                      ) : (
                        <ArrowUpwardIcon />
                      )}
                    </IconButton>
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  xs={4}
                  justify="space-around"
                  alignItems="center"
                  style={{ border: "1px solid #D1D1D1", borderRadius: "5px" }}
                >
                  <Grid item>
                    <Checkbox
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
                      id="duration"
                    />
                  </Grid>
                  <Grid item>
                    <label for="duration">
                      <Typography>Duration</Typography>
                    </label>
                  </Grid>
                  <Grid item>
                    <IconButton
                      disabled={!searchOptions.sort.duration.status}
                      onClick={() => {
                        setSearchOptions({
                          ...searchOptions,
                          sort: {
                            ...searchOptions.sort,
                            duration: {
                              ...searchOptions.sort.duration,
                              desc: !searchOptions.sort.duration.desc,
                            },
                          },
                        });
                      }}
                    >
                      {searchOptions.sort.duration.desc ? (
                        <ArrowDownwardIcon />
                      ) : (
                        <ArrowUpwardIcon />
                      )}
                    </IconButton>
                  </Grid>
                </Grid>
                
              </Grid>
            </Grid>
  
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                style={{ padding: "10px 50px", height: "auto" }}
                onClick={() => getData()}
              >
                Apply
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Modal>
    );
  };
  