describe('Demographical Data Table Construction', () => {
  const mockCollegeStatsInfo = [
    {
      'name': 'University of British Columbia',
      'admissionRate': 0.33,
      'avgSat': 1400,
      'numOfUndergrads': 50000,
      'ratioOfMen': 0.5,
      'ratioOfWomen': 0.5,
    },
    {
      'name': 'Simon Fraser University',
      'admissionRate': 0.55,
      'avgSat': 800,
      'numOfUndergrads': 50000,
      'ratioOfMen': 0.5,
      'ratioOfWomen': 0.5,
    },
  ];
  beforeEach(() => {
    spyOn(window, 'fetch')
        .and.returnValue(Promise.resolve({json: () => mockCollegeStatsInfo}));
    spyOn(google.visualization.DataTable.prototype, 'addRow');
    spyOn(google.visualization.DataTable.prototype, 'addColumn');
  });
  it('Will add correct columns/rows to Admission DataTable', async () => {
    await deserializeAdmissionData();
    expect(google.visualization.DataTable.prototype.addRow)
        .toHaveBeenCalledWith([
          mockCollegeStatsInfo[0]['name'],
          mockCollegeStatsInfo[0]['admissionRate'],
        ]);
    expect(google.visualization.DataTable.prototype.addRow)
        .toHaveBeenCalledWith([
          mockCollegeStatsInfo[1]['name'],
          mockCollegeStatsInfo[1]['admissionRate'],
        ]);
    expect(google.visualization.DataTable.prototype.addRow.calls.count())
        .toEqual(2);
    expect(google.visualization.DataTable.prototype.addColumn)
        .toHaveBeenCalledWith('string', 'Your Colleges');
    expect(google.visualization.DataTable.prototype.addColumn)
        .toHaveBeenCalledWith('number', 'Admission Rate (%)');
    expect(google.visualization.DataTable.prototype.addColumn.calls.count())
        .toEqual(2);
  });
  it('Will add correct columns/rows to SAT score DataTable', async () => {
    await deserializeAvgSatData();
    expect(google.visualization.DataTable.prototype.addRow)
        .toHaveBeenCalledWith([
          mockCollegeStatsInfo[0]['name'],
          mockCollegeStatsInfo[0]['avgSat'],
        ]);
    expect(google.visualization.DataTable.prototype.addRow)
        .toHaveBeenCalledWith([
          mockCollegeStatsInfo[1]['name'],
          mockCollegeStatsInfo[1]['avgSat'],
        ]);
    expect(google.visualization.DataTable.prototype.addRow.calls.count())
        .toEqual(2);
    expect(google.visualization.DataTable.prototype.addColumn)
        .toHaveBeenCalledWith('string', 'Your Colleges');
    expect(google.visualization.DataTable.prototype.addColumn)
        .toHaveBeenCalledWith('number', 'Average SAT score');
    expect(google.visualization.DataTable.prototype.addColumn.calls.count())
        .toEqual(2);
  });
  it(
      'Will add correct columns/rows to Number of Undergrads DataTable',
      async () => {
        await deserializeNumUndergradsData();
        expect(google.visualization.DataTable.prototype.addRow)
            .toHaveBeenCalledWith([
              mockCollegeStatsInfo[0]['name'],
              mockCollegeStatsInfo[0]['numOfUndergrads'],
            ]);
        expect(google.visualization.DataTable.prototype.addRow)
            .toHaveBeenCalledWith([
              mockCollegeStatsInfo[1]['name'],
              mockCollegeStatsInfo[1]['numOfUndergrads'],
            ]);
        expect(google.visualization.DataTable.prototype.addRow.calls.count())
            .toEqual(2);
        expect(google.visualization.DataTable.prototype.addColumn)
            .toHaveBeenCalledWith('string', 'Your Colleges');
        expect(google.visualization.DataTable.prototype.addColumn)
            .toHaveBeenCalledWith('number', 'Number of Undergraduate Students');
        expect(google.visualization.DataTable.prototype.addColumn.calls.count())
            .toEqual(2);
      });
  it('Will add correct columns/rows to Gender Ratio DataTable', async () => {
    await deserializeGenderRatioData();
    expect(google.visualization.DataTable.prototype.addRow)
        .toHaveBeenCalledWith([
          mockCollegeStatsInfo[0]['name'],
          mockCollegeStatsInfo[0]['ratioOfMen'],
          mockCollegeStatsInfo[0]['ratioOfWomen'],
        ]);
    expect(google.visualization.DataTable.prototype.addRow)
        .toHaveBeenCalledWith([
          mockCollegeStatsInfo[1]['name'],
          mockCollegeStatsInfo[1]['ratioOfMen'],
          mockCollegeStatsInfo[1]['ratioOfWomen'],
        ]);
    expect(google.visualization.DataTable.prototype.addRow.calls.count())
        .toEqual(2);
    expect(google.visualization.DataTable.prototype.addColumn)
        .toHaveBeenCalledWith('string', 'Your Colleges');
    expect(google.visualization.DataTable.prototype.addColumn)
        .toHaveBeenCalledWith('number', 'Ratio of Men (%)');
    expect(google.visualization.DataTable.prototype.addColumn)
        .toHaveBeenCalledWith('number', 'Ratio of Women (%)');
    expect(google.visualization.DataTable.prototype.addColumn.calls.count())
        .toEqual(3);
  });
});
