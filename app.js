function bjt(date, time) {
  return new Date(`${date}T${time}:00+08:00`).toISOString().replace(".000Z", "Z");
}

function dateOnly(date, title, location, type, series) {
  return [bjt(date, "00:00"), title, location, type, series, "dateOnly"];
}

function addDays(date, offset) {
  const result = new Date(`${date}T00:00:00+08:00`);
  result.setUTCDate(result.getUTCDate() + offset);
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(result);
}

function f1Weekend(name, location, raceDate, raceTime, sprint = false) {
  const friday = addDays(raceDate, -2);
  const saturday = addDays(raceDate, -1);
  if (sprint) {
    return [
      [bjt(friday, "19:30"), `${name} 一练`, location, "practice", "F1"],
      [bjt(friday, "23:30"), `${name} 冲刺排位赛`, location, "sprintQualifying", "F1"],
      [bjt(saturday, "18:00"), `${name} 冲刺赛`, location, "sprint", "F1"],
      [bjt(saturday, "22:00"), `${name} 排位赛`, location, "qualifying", "F1"],
      [bjt(raceDate, raceTime), `${name} 正赛`, location, "race", "F1"]
    ];
  }
  return [
    [bjt(friday, "19:30"), `${name} 一练`, location, "practice", "F1"],
    [bjt(friday, "23:00"), `${name} 二练`, location, "practice", "F1"],
    [bjt(saturday, "18:30"), `${name} 三练`, location, "practice", "F1"],
    [bjt(saturday, "22:00"), `${name} 排位赛`, location, "qualifying", "F1"],
    [bjt(raceDate, raceTime), `${name} 正赛`, location, "race", "F1"]
  ];
}

const seriesCatalog = [
  {
    id: "f1",
    name: "Formula 1",
    meta: "世界一级方程式锦标赛",
    tag: "F1",
    events: [
      ...f1Weekend("Australian Grand Prix", "Melbourne · 澳大利亚", "2026-03-08", "13:00"),
      ...f1Weekend("Chinese Grand Prix", "Shanghai International Circuit · 中国", "2026-03-15", "15:00", true),
      ...f1Weekend("Japanese Grand Prix", "Suzuka · 日本", "2026-03-29", "13:00"),
      ...f1Weekend("Bahrain Grand Prix", "Sakhir · 巴林", "2026-04-12", "23:00"),
      ...f1Weekend("Saudi Arabian Grand Prix", "Jeddah · 沙特", "2026-04-19", "01:00"),
      ...f1Weekend("Miami Grand Prix", "Miami · 美国", "2026-05-04", "04:00", true),
      ...f1Weekend("Canadian Grand Prix", "Montreal · 加拿大", "2026-05-25", "02:00", true),
      ...f1Weekend("Monaco Grand Prix", "Monte Carlo · 摩纳哥", "2026-06-07", "21:00"),
      ...f1Weekend("Spanish Grand Prix", "Barcelona-Catalunya · 西班牙", "2026-06-14", "21:00"),
      ...f1Weekend("Austrian Grand Prix", "Red Bull Ring · 奥地利", "2026-06-28", "21:00"),
      ...f1Weekend("British Grand Prix", "Silverstone · 英国", "2026-07-05", "22:00", true),
      ...f1Weekend("Belgian Grand Prix", "Spa-Francorchamps · 比利时", "2026-07-19", "21:00"),
      ...f1Weekend("Hungarian Grand Prix", "Hungaroring · 匈牙利", "2026-07-26", "21:00"),
      ...f1Weekend("Dutch Grand Prix", "Zandvoort · 荷兰", "2026-08-23", "21:00", true),
      ...f1Weekend("Italian Grand Prix", "Monza · 意大利", "2026-09-06", "21:00"),
      ...f1Weekend("Azerbaijan Grand Prix", "Baku · 阿塞拜疆", "2026-09-27", "19:00"),
      ...f1Weekend("Singapore Grand Prix", "Marina Bay · 新加坡", "2026-10-11", "20:00", true),
      ...f1Weekend("United States Grand Prix", "COTA · 美国", "2026-10-26", "03:00"),
      ...f1Weekend("Mexico City Grand Prix", "Mexico City · 墨西哥", "2026-11-02", "04:00"),
      ...f1Weekend("Sao Paulo Grand Prix", "Interlagos · 巴西", "2026-11-09", "01:00"),
      ...f1Weekend("Las Vegas Grand Prix", "Las Vegas · 美国", "2026-11-21", "12:00"),
      ...f1Weekend("Qatar Grand Prix", "Lusail · 卡塔尔", "2026-11-30", "00:00"),
      ...f1Weekend("Abu Dhabi Grand Prix", "Yas Marina · 阿联酋", "2026-12-06", "21:00")
    ]
  },
  {
    id: "fe",
    name: "Formula E",
    meta: "电动方程式世界锦标赛",
    tag: "FE",
    events: [
      [bjt("2025-12-06", "03:30"), "Sao Paulo E-Prix R1 一练/三练", "Sao Paulo · 巴西", "practice", "FE"],
      [bjt("2025-12-06", "18:30"), "Sao Paulo E-Prix R1 二练", "Sao Paulo · 巴西", "practice", "FE"],
      [bjt("2025-12-06", "20:40"), "Sao Paulo E-Prix R1 排位赛", "Sao Paulo · 巴西", "qualifying", "FE"],
      [bjt("2025-12-07", "01:05"), "Sao Paulo E-Prix R1 正赛", "Sao Paulo · 巴西", "race", "FE"],
      [bjt("2026-01-10", "06:00"), "Mexico City E-Prix R2 一练/三练", "Mexico City · 墨西哥", "practice", "FE"],
      [bjt("2026-01-10", "21:30"), "Mexico City E-Prix R2 二练", "Mexico City · 墨西哥", "practice", "FE"],
      [bjt("2026-01-10", "23:40"), "Mexico City E-Prix R2 排位赛", "Mexico City · 墨西哥", "qualifying", "FE"],
      [bjt("2026-01-11", "04:05"), "Mexico City E-Prix R2 正赛", "Mexico City · 墨西哥", "race", "FE"],
      [bjt("2026-01-31", "05:00"), "Miami E-Prix R3 一练/三练", "Miami · 美国", "practice", "FE"],
      [bjt("2026-01-31", "19:30"), "Miami E-Prix R3 二练", "Miami · 美国", "practice", "FE"],
      [bjt("2026-01-31", "21:40"), "Miami E-Prix R3 排位赛", "Miami · 美国", "qualifying", "FE"],
      [bjt("2026-02-01", "02:05"), "Miami E-Prix R3 正赛", "Miami · 美国", "race", "FE"],
      [bjt("2026-02-13", "01:00"), "Jeddah E-Prix R4 一练/三练", "Jeddah · 沙特阿拉伯", "practice", "FE"],
      [bjt("2026-02-13", "18:30"), "Jeddah E-Prix R4 二练", "Jeddah · 沙特阿拉伯", "practice", "FE"],
      [bjt("2026-02-13", "20:40"), "Jeddah E-Prix R4 排位赛", "Jeddah · 沙特阿拉伯", "qualifying", "FE"],
      [bjt("2026-02-14", "01:05"), "Jeddah E-Prix R4 正赛", "Jeddah · 沙特阿拉伯", "race", "FE"],
      [bjt("2026-02-14", "18:30"), "Jeddah E-Prix R5 一练/三练", "Jeddah · 沙特阿拉伯", "practice", "FE"],
      [bjt("2026-02-14", "20:40"), "Jeddah E-Prix R5 排位赛", "Jeddah · 沙特阿拉伯", "qualifying", "FE"],
      [bjt("2026-02-15", "01:05"), "Jeddah E-Prix R5 正赛", "Jeddah · 沙特阿拉伯", "race", "FE"],
      [bjt("2026-03-20", "22:30"), "Madrid E-Prix R6 一练/三练", "Madrid · 西班牙", "practice", "FE"],
      [bjt("2026-03-21", "15:30"), "Madrid E-Prix R6 二练", "Madrid · 西班牙", "practice", "FE"],
      [bjt("2026-03-21", "17:40"), "Madrid E-Prix R6 排位赛", "Madrid · 西班牙", "qualifying", "FE"],
      [bjt("2026-03-21", "22:05"), "Madrid E-Prix R6 正赛", "Madrid · 西班牙", "race", "FE"],
      [bjt("2026-05-01", "22:00"), "Berlin E-Prix R7 一练/三练", "Berlin · 德国", "practice", "FE"],
      [bjt("2026-05-02", "15:30"), "Berlin E-Prix R7 二练", "Berlin · 德国", "practice", "FE"],
      [bjt("2026-05-02", "17:40"), "Berlin E-Prix R7 排位赛", "Berlin · 德国", "qualifying", "FE"],
      [bjt("2026-05-02", "22:05"), "Berlin E-Prix R7 正赛", "Berlin · 德国", "race", "FE"],
      [bjt("2026-05-03", "15:30"), "Berlin E-Prix R8 一练/三练", "Berlin · 德国", "practice", "FE"],
      [bjt("2026-05-03", "17:40"), "Berlin E-Prix R8 排位赛", "Berlin · 德国", "qualifying", "FE"],
      [bjt("2026-05-03", "22:05"), "Berlin E-Prix R8 正赛", "Berlin · 德国", "race", "FE"],
      [bjt("2026-05-16", "13:30"), "Monaco E-Prix R9 一练/三练", "Monaco · 摩纳哥", "practice", "FE"],
      [bjt("2026-05-16", "15:10"), "Monaco E-Prix R9 二练", "Monaco · 摩纳哥", "practice", "FE"],
      [bjt("2026-05-16", "16:40"), "Monaco E-Prix R9 排位赛", "Monaco · 摩纳哥", "qualifying", "FE"],
      [bjt("2026-05-16", "21:05"), "Monaco E-Prix R9 正赛", "Monaco · 摩纳哥", "race", "FE"],
      [bjt("2026-05-17", "14:30"), "Monaco E-Prix R10 一练/三练", "Monaco · 摩纳哥", "practice", "FE"],
      [bjt("2026-05-17", "16:40"), "Monaco E-Prix R10 排位赛", "Monaco · 摩纳哥", "qualifying", "FE"],
      [bjt("2026-05-17", "21:05"), "Monaco E-Prix R10 正赛", "Monaco · 摩纳哥", "race", "FE"],
      [bjt("2026-06-19", "16:30"), "Sanya E-Prix R11 一练/三练", "Sanya · 中国", "practice", "FE"],
      [bjt("2026-06-20", "08:30"), "Sanya E-Prix R11 二练", "Sanya · 中国", "practice", "FE"],
      [bjt("2026-06-20", "10:40"), "Sanya E-Prix R11 排位赛", "Sanya · 中国", "qualifying", "FE"],
      [bjt("2026-06-20", "15:05"), "Sanya E-Prix R11 正赛", "Sanya · 中国", "race", "FE"],
      [bjt("2026-07-03", "16:00"), "Shanghai E-Prix R12 一练/三练", "Shanghai · 中国", "practice", "FE"],
      [bjt("2026-07-04", "08:30"), "Shanghai E-Prix R12 二练", "Shanghai · 中国", "practice", "FE"],
      [bjt("2026-07-04", "10:40"), "Shanghai E-Prix R12 排位赛", "Shanghai · 中国", "qualifying", "FE"],
      [bjt("2026-07-04", "15:05"), "Shanghai E-Prix R12 正赛", "Shanghai · 中国", "race", "FE"],
      [bjt("2026-07-05", "08:30"), "Shanghai E-Prix R13 一练/三练", "Shanghai · 中国", "practice", "FE"],
      [bjt("2026-07-05", "10:40"), "Shanghai E-Prix R13 排位赛", "Shanghai · 中国", "qualifying", "FE"],
      [bjt("2026-07-05", "15:05"), "Shanghai E-Prix R13 正赛", "Shanghai · 中国", "race", "FE"],
      [bjt("2026-07-24", "18:00"), "Tokyo E-Prix R14 一练/三练", "Tokyo · 日本", "practice", "FE"],
      [bjt("2026-07-25", "12:30"), "Tokyo E-Prix R14 二练", "Tokyo · 日本", "practice", "FE"],
      [bjt("2026-07-25", "14:40"), "Tokyo E-Prix R14 排位赛", "Tokyo · 日本", "qualifying", "FE"],
      [bjt("2026-07-25", "19:05"), "Tokyo E-Prix R14 正赛", "Tokyo · 日本", "race", "FE"],
      [bjt("2026-07-26", "12:30"), "Tokyo E-Prix R15 一练/三练", "Tokyo · 日本", "practice", "FE"],
      [bjt("2026-07-26", "14:40"), "Tokyo E-Prix R15 排位赛", "Tokyo · 日本", "qualifying", "FE"],
      [bjt("2026-07-26", "19:05"), "Tokyo E-Prix R15 正赛", "Tokyo · 日本", "race", "FE"],
      [bjt("2026-08-14", "23:00"), "London E-Prix R16 一练/三练", "London · 英国", "practice", "FE"],
      [bjt("2026-08-15", "15:30"), "London E-Prix R16 二练", "London · 英国", "practice", "FE"],
      [bjt("2026-08-15", "17:40"), "London E-Prix R16 排位赛", "London · 英国", "qualifying", "FE"],
      [bjt("2026-08-15", "22:05"), "London E-Prix R16 正赛", "London · 英国", "race", "FE"],
      [bjt("2026-08-16", "15:30"), "London E-Prix R17 一练/三练", "London · 英国", "practice", "FE"],
      [bjt("2026-08-16", "17:40"), "London E-Prix R17 排位赛", "London · 英国", "qualifying", "FE"],
      [bjt("2026-08-16", "22:05"), "London E-Prix R17 正赛", "London · 英国", "race", "FE"]
    ]
  },
  {
    id: "fe27",
    name: "Formula E 2026-27",
    meta: "电动方程式 2026-27 赛季",
    tag: "FE27",
    events: [
      [bjt("2026-12-18", "00:00"), "Jeddah E-Prix R1", "Jeddah · 沙特阿拉伯", "race", "FE27", "dateOnly"],
      [bjt("2026-12-19", "00:00"), "Jeddah E-Prix R2", "Jeddah · 沙特阿拉伯", "race", "FE27", "dateOnly"],
      [bjt("2027-01-16", "00:00"), "Mexico City E-Prix R3", "Mexico City · 墨西哥", "race", "FE27", "dateOnly"],
      [bjt("2027-02-06", "00:00"), "Austin E-Prix R4", "Austin · 美国", "race", "FE27", "dateOnly"],
      [bjt("2027-02-20", "00:00"), "Miami E-Prix R5", "Miami · 美国", "race", "FE27", "dateOnly"],
      [bjt("2027-03-13", "00:00"), "Sao Paulo E-Prix R6", "Sao Paulo · 巴西", "race", "FE27", "dateOnly"],
      [bjt("2027-04-17", "00:00"), "Sanya E-Prix R7", "Sanya · 中国", "race", "FE27", "dateOnly"],
      [bjt("2027-05-08", "00:00"), "Berlin E-Prix R8", "Berlin · 德国", "race", "FE27", "dateOnly"],
      [bjt("2027-05-09", "00:00"), "Berlin E-Prix R9", "Berlin · 德国", "race", "FE27", "dateOnly"],
      [bjt("2027-05-15", "00:00"), "Monaco E-Prix R10", "Monaco · 摩纳哥", "race", "FE27", "dateOnly"],
      [bjt("2027-05-16", "00:00"), "Monaco E-Prix R11", "Monaco · 摩纳哥", "race", "FE27", "dateOnly"],
      [bjt("2027-05-29", "00:00"), "London E-Prix R12", "London · 英国", "race", "FE27", "dateOnly"],
      [bjt("2027-05-30", "00:00"), "London E-Prix R13", "London · 英国", "race", "FE27", "dateOnly"],
      [bjt("2027-06-18", "00:00"), "Zandvoort E-Prix R14", "Zandvoort · 荷兰", "race", "FE27", "dateOnly"],
      [bjt("2027-06-19", "00:00"), "Zandvoort E-Prix R15", "Zandvoort · 荷兰", "race", "FE27", "dateOnly"],
      [bjt("2027-06-26", "00:00"), "Madrid E-Prix R16", "Madrid · 西班牙", "race", "FE27", "dateOnly"],
      [bjt("2027-06-27", "00:00"), "Madrid E-Prix R17", "Madrid · 西班牙", "race", "FE27", "dateOnly"],
      [bjt("2027-07-10", "00:00"), "Shanghai E-Prix R18", "Shanghai · 中国", "race", "FE27", "dateOnly"],
      [bjt("2027-07-11", "00:00"), "Shanghai E-Prix R19", "Shanghai · 中国", "race", "FE27", "dateOnly"],
      [bjt("2027-07-24", "00:00"), "Tokyo E-Prix R20", "Tokyo · 日本", "race", "FE27", "dateOnly"],
      [bjt("2027-07-25", "00:00"), "Tokyo E-Prix R21", "Tokyo · 日本", "race", "FE27", "dateOnly"]
    ]
  },
  {
    id: "wec",
    name: "WEC",
    meta: "世界耐力锦标赛",
    tag: "WEC",
    events: [
      dateOnly("2026-04-14", "WEC-意大利官方序幕", "Imola · 意大利", "practice", "WEC"),
      dateOnly("2026-04-19", "WEC-伊莫拉6小时", "Imola · 意大利", "endurance", "WEC"),
      dateOnly("2026-05-09", "WEC-斯帕6小时", "Spa-Francorchamps · 比利时", "endurance", "WEC"),
      dateOnly("2026-06-13", "WEC-勒芒24小时 第1日", "Circuit de la Sarthe · 法国", "endurance", "WEC"),
      dateOnly("2026-06-14", "WEC-勒芒24小时 第2日", "Circuit de la Sarthe · 法国", "endurance", "WEC"),
      dateOnly("2026-07-12", "WEC-圣保罗6小时", "Interlagos · 巴西", "endurance", "WEC"),
      dateOnly("2026-09-06", "WEC-孤星勒芒", "COTA · 美国", "endurance", "WEC"),
      dateOnly("2026-09-27", "WEC-富士6小时", "Fuji Speedway · 日本", "endurance", "WEC"),
      dateOnly("2026-10-24", "WEC-卡塔尔1812公里", "Lusail · 卡塔尔", "endurance", "WEC"),
      dateOnly("2026-11-07", "WEC-巴林8小时", "Sakhir · 巴林", "endurance", "WEC")
    ]
  },
  {
    id: "wrc",
    name: "WRC",
    meta: "世界拉力锦标赛",
    tag: "WRC",
    events: [
      dateOnly("2026-01-22", "Rallye Monte-Carlo 开始", "Monaco / France", "race", "WRC"),
      dateOnly("2026-02-12", "Rally Sweden 开始", "Umea · 瑞典", "race", "WRC"),
      dateOnly("2026-03-12", "Safari Rally Kenya 开始", "Naivasha · 肯尼亚", "race", "WRC"),
      dateOnly("2026-04-09", "Croatia Rally 开始", "Croatia · 克罗地亚", "race", "WRC"),
      dateOnly("2026-04-23", "Rally Islas Canarias 开始", "Canary Islands · 西班牙", "race", "WRC"),
      dateOnly("2026-05-07", "Rally Portugal 开始", "Porto / Matosinhos · 葡萄牙", "race", "WRC"),
      dateOnly("2026-05-28", "Rally Japan 开始", "Aichi / Gifu · 日本", "race", "WRC"),
      dateOnly("2026-06-25", "Acropolis Rally Greece 开始", "Lamia · 希腊", "race", "WRC"),
      dateOnly("2026-07-16", "Rally Estonia 开始", "Tartu · 爱沙尼亚", "race", "WRC"),
      dateOnly("2026-07-30", "Rally Finland 开始", "Jyvaskyla · 芬兰", "race", "WRC"),
      dateOnly("2026-08-27", "Rally del Paraguay 开始", "Paraguay", "race", "WRC"),
      dateOnly("2026-09-10", "Rally Chile Bio Bio 开始", "Concepcion · 智利", "race", "WRC"),
      dateOnly("2026-10-01", "Rally Italia 开始", "Italy · 意大利", "race", "WRC"),
      dateOnly("2026-11-12", "Rally Saudi Arabia 开始", "Saudi Arabia · 沙特", "race", "WRC")
    ]
  },
  {
    id: "f2",
    name: "Formula 2",
    meta: "FIA 二级方程式锦标赛",
    tag: "F2",
    events: [
      ["2026-03-08T03:30:00Z", "Melbourne Feature Race", "Albert Park · 澳大利亚", "race", "F2"],
      ["2026-03-15T04:00:00Z", "Shanghai Feature Race", "Shanghai International Circuit · 中国", "race", "F2"],
      ["2026-04-12T09:00:00Z", "Bahrain Feature Race", "Sakhir · 巴林", "race", "F2"],
      ["2026-04-19T09:00:00Z", "Jeddah Feature Race", "Jeddah · 沙特", "race", "F2"],
      ["2026-05-03T15:00:00Z", "Miami Feature Race", "Miami · 美国", "race", "F2"],
      ["2026-05-24T09:00:00Z", "Monte Carlo Feature Race", "Monaco · 摩纳哥", "race", "F2"],
      ["2026-06-14T09:00:00Z", "Barcelona Feature Race", "Barcelona-Catalunya · 西班牙", "race", "F2"],
      ["2026-06-28T08:35:00Z", "Austria Feature Race", "Red Bull Ring · 奥地利", "race", "F2"],
      ["2026-07-05T09:00:00Z", "Silverstone Feature Race", "Silverstone · 英国", "race", "F2"],
      ["2026-07-19T08:30:00Z", "Spa Feature Race", "Spa-Francorchamps · 比利时", "race", "F2"],
      ["2026-07-26T08:30:00Z", "Budapest Feature Race", "Hungaroring · 匈牙利", "race", "F2"],
      ["2026-08-23T08:30:00Z", "Zandvoort Feature Race", "Zandvoort · 荷兰", "race", "F2"],
      ["2026-09-06T08:30:00Z", "Monza Feature Race", "Monza · 意大利", "race", "F2"],
      ["2026-09-27T08:30:00Z", "Baku Feature Race", "Baku · 阿塞拜疆", "race", "F2"],
      ["2026-11-29T10:00:00Z", "Qatar Feature Race", "Lusail · 卡塔尔", "race", "F2"],
      ["2026-12-06T09:00:00Z", "Abu Dhabi Feature Race", "Yas Marina · 阿联酋", "race", "F2"]
    ]
  },
  {
    id: "f3",
    name: "Formula 3",
    meta: "FIA 三级方程式锦标赛",
    tag: "F3",
    events: [
      ["2026-03-08T02:00:00Z", "Melbourne Feature Race", "Albert Park · 澳大利亚", "race", "F3"],
      ["2026-04-12T07:30:00Z", "Bahrain Feature Race", "Sakhir · 巴林", "race", "F3"],
      ["2026-05-24T07:30:00Z", "Monte Carlo Feature Race", "Monaco · 摩纳哥", "race", "F3"],
      ["2026-06-14T07:30:00Z", "Barcelona Feature Race", "Barcelona-Catalunya · 西班牙", "race", "F3"],
      ["2026-06-28T07:05:00Z", "Austria Feature Race", "Red Bull Ring · 奥地利", "race", "F3"],
      ["2026-07-05T08:05:00Z", "Silverstone Feature Race", "Silverstone · 英国", "race", "F3"],
      ["2026-07-19T07:05:00Z", "Spa Feature Race", "Spa-Francorchamps · 比利时", "race", "F3"],
      ["2026-07-26T07:05:00Z", "Budapest Feature Race", "Hungaroring · 匈牙利", "race", "F3"],
      ["2026-09-06T07:05:00Z", "Monza Feature Race", "Monza · 意大利", "race", "F3"],
      dateOnly("2026-09-13", "Madrid Feature Race", "Madrid · 西班牙", "race", "F3")
    ]
  },
  {
    id: "f1academy",
    name: "F1 Academy",
    meta: "F1 女子青训方程式赛事",
    tag: "F1A",
    events: [
      dateOnly("2026-03-14", "F1 Academy 上海 反向发车赛", "Shanghai International Circuit · 中国", "race", "F1A"),
      dateOnly("2026-03-15", "F1 Academy 上海 主赛", "Shanghai International Circuit · 中国", "race", "F1A"),
      dateOnly("2026-05-23", "F1 Academy 加拿大 开幕赛", "Circuit Gilles Villeneuve · 加拿大", "race", "F1A"),
      dateOnly("2026-05-23", "F1 Academy 加拿大 反向发车赛", "Circuit Gilles Villeneuve · 加拿大", "race", "F1A"),
      dateOnly("2026-05-24", "F1 Academy 加拿大 主赛", "Circuit Gilles Villeneuve · 加拿大", "race", "F1A"),
      dateOnly("2026-07-04", "F1 Academy 英国 反向发车赛", "Silverstone · 英国", "race", "F1A"),
      dateOnly("2026-07-05", "F1 Academy 英国 主赛", "Silverstone · 英国", "race", "F1A"),
      dateOnly("2026-08-22", "F1 Academy 荷兰 反向发车赛", "Zandvoort · 荷兰", "race", "F1A"),
      dateOnly("2026-08-23", "F1 Academy 荷兰 主赛", "Zandvoort · 荷兰", "race", "F1A"),
      dateOnly("2026-10-24", "F1 Academy 德州 开幕赛", "COTA · 美国", "race", "F1A"),
      dateOnly("2026-10-24", "F1 Academy 德州 反向发车赛", "COTA · 美国", "race", "F1A"),
      dateOnly("2026-10-25", "F1 Academy 德州 主赛", "COTA · 美国", "race", "F1A"),
      dateOnly("2026-11-20", "F1 Academy 拉斯维加斯 反向发车赛", "Las Vegas Strip Circuit · 美国", "race", "F1A"),
      dateOnly("2026-11-21", "F1 Academy 拉斯维加斯 主赛", "Las Vegas Strip Circuit · 美国", "race", "F1A")
    ]
  },
  {
    id: "superformula",
    name: "Super Formula",
    meta: "日本顶级方程式锦标赛",
    tag: "SF",
    events: [
      dateOnly("2026-04-03", "Motegi Round 1", "Mobility Resort Motegi · 日本", "race", "SF"),
      dateOnly("2026-04-05", "Motegi Round 2", "Mobility Resort Motegi · 日本", "race", "SF"),
      dateOnly("2026-04-26", "Autopolis Round 3", "Autopolis · 日本", "race", "SF"),
      dateOnly("2026-05-22", "Suzuka Round 4", "Suzuka Circuit · 日本", "race", "SF"),
      dateOnly("2026-05-24", "Suzuka Round 5", "Suzuka Circuit · 日本", "race", "SF"),
      dateOnly("2026-07-17", "Fuji Round 6", "Fuji Speedway · 日本", "race", "SF"),
      dateOnly("2026-07-19", "Fuji Round 7", "Fuji Speedway · 日本", "race", "SF"),
      dateOnly("2026-08-09", "Sugo Round 8", "Sportsland Sugo · 日本", "race", "SF"),
      dateOnly("2026-10-09", "Fuji Round 9", "Fuji Speedway · 日本", "race", "SF"),
      dateOnly("2026-10-11", "Fuji Round 10", "Fuji Speedway · 日本", "race", "SF"),
      dateOnly("2026-11-20", "Suzuka Round 11", "Suzuka Circuit · 日本", "race", "SF"),
      dateOnly("2026-11-22", "Suzuka Round 12", "Suzuka Circuit · 日本", "race", "SF")
    ]
  },
  {
    id: "indycar",
    name: "IndyCar",
    meta: "北美顶级开放轮赛事",
    tag: "INDY",
    events: [
      dateOnly("2026-03-01", "Grand Prix of St. Petersburg", "St. Petersburg · 美国", "race", "IndyCar"),
      dateOnly("2026-03-07", "Phoenix Grand Prix", "Phoenix · 美国", "race", "IndyCar"),
      dateOnly("2026-03-15", "Arlington Grand Prix", "Arlington · 美国", "race", "IndyCar"),
      dateOnly("2026-03-29", "Alabama Indy Grand Prix", "Barber · 美国", "race", "IndyCar"),
      dateOnly("2026-04-19", "Grand Prix of Long Beach", "Long Beach · 美国", "race", "IndyCar"),
      dateOnly("2026-05-09", "Sonsio Grand Prix", "Indianapolis Road Course · 美国", "race", "IndyCar"),
      dateOnly("2026-05-24", "Indianapolis 500", "Indianapolis · 美国", "race", "IndyCar"),
      dateOnly("2026-05-31", "Detroit Grand Prix", "Detroit · 美国", "race", "IndyCar"),
      dateOnly("2026-06-07", "St. Louis 500", "Gateway · 美国", "race", "IndyCar"),
      dateOnly("2026-06-21", "Road America Grand Prix", "Elkhart Lake · 美国", "race", "IndyCar"),
      dateOnly("2026-07-05", "Mid-Ohio Grand Prix", "Lexington · 美国", "race", "IndyCar"),
      dateOnly("2026-07-19", "Nashville Grand Prix", "Nashville · 美国", "race", "IndyCar"),
      dateOnly("2026-08-09", "Portland Grand Prix", "Portland · 美国", "race", "IndyCar"),
      dateOnly("2026-08-16", "Markham Grand Prix", "Markham · 加拿大", "race", "IndyCar"),
      dateOnly("2026-08-23", "Washington DC Grand Prix", "Washington DC · 美国", "race", "IndyCar"),
      dateOnly("2026-08-29", "Milwaukee Mile Race 1", "Milwaukee · 美国", "race", "IndyCar"),
      dateOnly("2026-08-30", "Milwaukee Mile Race 2", "Milwaukee · 美国", "race", "IndyCar"),
      dateOnly("2026-09-06", "Laguna Seca Grand Prix", "Monterey · 美国", "race", "IndyCar")
    ]
  },
  {
    id: "nascar",
    name: "NASCAR",
    meta: "NASCAR 杯系列赛",
    tag: "NASCAR",
    events: [
      dateOnly("2026-02-01", "Clash", "Bowman Gray Stadium · 美国", "race", "NASCAR"),
      dateOnly("2026-02-15", "Daytona 500", "Daytona · 美国", "race", "NASCAR"),
      dateOnly("2026-02-22", "EchoPark Automotive Grand Prix", "Atlanta · 美国", "race", "NASCAR"),
      dateOnly("2026-03-01", "Circuit of The Americas", "Austin · 美国", "race", "NASCAR"),
      dateOnly("2026-03-08", "Phoenix Raceway", "Phoenix · 美国", "race", "NASCAR"),
      dateOnly("2026-03-15", "Las Vegas Motor Speedway", "Las Vegas · 美国", "race", "NASCAR"),
      dateOnly("2026-03-22", "Darlington Raceway", "Darlington · 美国", "race", "NASCAR"),
      dateOnly("2026-03-29", "Martinsville Speedway", "Martinsville · 美国", "race", "NASCAR"),
      dateOnly("2026-04-12", "Bristol Motor Speedway", "Bristol · 美国", "race", "NASCAR"),
      dateOnly("2026-04-19", "Kansas Speedway", "Kansas City · 美国", "race", "NASCAR"),
      dateOnly("2026-04-26", "Talladega Superspeedway", "Talladega · 美国", "race", "NASCAR"),
      dateOnly("2026-05-03", "Texas Motor Speedway", "Fort Worth · 美国", "race", "NASCAR"),
      dateOnly("2026-05-10", "Watkins Glen International", "Watkins Glen · 美国", "race", "NASCAR"),
      dateOnly("2026-05-17", "All-Star Race at Dover", "Dover · 美国", "race", "NASCAR"),
      dateOnly("2026-05-24", "Coca-Cola 600", "Charlotte · 美国", "race", "NASCAR"),
      dateOnly("2026-05-31", "Nashville Superspeedway", "Nashville · 美国", "race", "NASCAR"),
      dateOnly("2026-06-07", "Michigan International Speedway", "Brooklyn · 美国", "race", "NASCAR"),
      dateOnly("2026-06-14", "Pocono Raceway", "Long Pond · 美国", "race", "NASCAR"),
      dateOnly("2026-06-21", "San Diego Street Race", "San Diego · 美国", "race", "NASCAR"),
      dateOnly("2026-06-28", "Sonoma Raceway", "Sonoma · 美国", "race", "NASCAR"),
      dateOnly("2026-07-05", "Chicago Street Race", "Chicago · 美国", "race", "NASCAR"),
      dateOnly("2026-07-12", "EchoPark Speedway", "Atlanta · 美国", "race", "NASCAR"),
      dateOnly("2026-07-19", "North Wilkesboro Speedway", "North Wilkesboro · 美国", "race", "NASCAR"),
      dateOnly("2026-07-26", "Indianapolis Motor Speedway", "Indianapolis · 美国", "race", "NASCAR"),
      dateOnly("2026-08-09", "Iowa Speedway", "Iowa · 美国", "race", "NASCAR"),
      dateOnly("2026-08-15", "Richmond Raceway", "Richmond · 美国", "race", "NASCAR"),
      dateOnly("2026-08-23", "New Hampshire Motor Speedway", "Loudon · 美国", "race", "NASCAR"),
      dateOnly("2026-08-29", "Daytona Night Race", "Daytona · 美国", "race", "NASCAR"),
      dateOnly("2026-09-06", "Darlington Playoff Race", "Darlington · 美国", "race", "NASCAR"),
      dateOnly("2026-09-13", "World Wide Technology Raceway", "Gateway · 美国", "race", "NASCAR"),
      dateOnly("2026-09-19", "Bristol Night Race", "Bristol · 美国", "race", "NASCAR"),
      dateOnly("2026-09-27", "Kansas Playoff Race", "Kansas City · 美国", "race", "NASCAR"),
      dateOnly("2026-10-04", "Las Vegas Playoff Race", "Las Vegas · 美国", "race", "NASCAR"),
      dateOnly("2026-10-11", "Charlotte Roval", "Charlotte · 美国", "race", "NASCAR"),
      dateOnly("2026-10-18", "Phoenix Playoff Race", "Phoenix · 美国", "race", "NASCAR"),
      dateOnly("2026-10-25", "Talladega Playoff Race", "Talladega · 美国", "race", "NASCAR"),
      dateOnly("2026-11-01", "Martinsville Playoff Race", "Martinsville · 美国", "race", "NASCAR"),
      dateOnly("2026-11-08", "Miami Championship Race", "Homestead-Miami · 美国", "race", "NASCAR")
    ]
  },
  {
    id: "nls",
    name: "NLS",
    meta: "纽博格林耐力系列赛",
    tag: "NLS",
    events: [
      dateOnly("2026-03-21", "NLS 1", "Nurburgring Nordschleife · 德国", "endurance", "NLS"),
      dateOnly("2026-04-04", "NLS 2", "Nurburgring Nordschleife · 德国", "endurance", "NLS"),
      dateOnly("2026-04-18", "NLS 3", "Nurburgring Nordschleife · 德国", "endurance", "NLS"),
      dateOnly("2026-06-27", "NLS 4", "Nurburgring Nordschleife · 德国", "endurance", "NLS"),
      dateOnly("2026-07-11", "NLS 5", "Nurburgring Nordschleife · 德国", "endurance", "NLS"),
      dateOnly("2026-08-01", "NLS 6", "Nurburgring Nordschleife · 德国", "endurance", "NLS"),
      dateOnly("2026-09-12", "NLS 7", "Nurburgring Nordschleife · 德国", "endurance", "NLS"),
      dateOnly("2026-10-10", "NLS 8", "Nurburgring Nordschleife · 德国", "endurance", "NLS")
    ]
  },
  {
    id: "motogp",
    name: "MotoGP",
    meta: "世界摩托车锦标赛最高组别",
    tag: "MGP",
    events: [
      dateOnly("2026-03-01", "Thai Grand Prix", "Buriram · 泰国", "race", "MotoGP"),
      dateOnly("2026-03-22", "Brazilian Grand Prix", "Goiania · 巴西", "race", "MotoGP"),
      dateOnly("2026-03-29", "Americas Grand Prix", "Austin · 美国", "race", "MotoGP"),
      dateOnly("2026-04-12", "Qatar Grand Prix", "Lusail · 卡塔尔", "race", "MotoGP"),
      dateOnly("2026-04-26", "Spanish Grand Prix", "Jerez · 西班牙", "race", "MotoGP"),
      dateOnly("2026-05-10", "French Grand Prix", "Le Mans · 法国", "race", "MotoGP"),
      dateOnly("2026-05-17", "Catalan Grand Prix", "Barcelona-Catalunya · 西班牙", "race", "MotoGP"),
      dateOnly("2026-05-31", "Italian Grand Prix", "Mugello · 意大利", "race", "MotoGP"),
      dateOnly("2026-06-07", "Hungarian Grand Prix", "Balaton Park · 匈牙利", "race", "MotoGP"),
      dateOnly("2026-06-21", "Czech Grand Prix", "Brno · 捷克", "race", "MotoGP"),
      dateOnly("2026-06-28", "Dutch TT", "Assen · 荷兰", "race", "MotoGP"),
      dateOnly("2026-07-12", "German Grand Prix", "Sachsenring · 德国", "race", "MotoGP"),
      dateOnly("2026-08-09", "British Grand Prix", "Silverstone · 英国", "race", "MotoGP"),
      dateOnly("2026-08-30", "Aragon Grand Prix", "MotorLand Aragon · 西班牙", "race", "MotoGP"),
      dateOnly("2026-09-13", "San Marino Grand Prix", "Misano · 圣马力诺", "race", "MotoGP"),
      dateOnly("2026-08-16", "Austrian Grand Prix", "Spielberg · 奥地利", "race", "MotoGP"),
      dateOnly("2026-10-04", "Japanese Grand Prix", "Motegi · 日本", "race", "MotoGP"),
      dateOnly("2026-10-11", "Indonesian Grand Prix", "Mandalika · 印尼", "race", "MotoGP"),
      dateOnly("2026-10-25", "Australian Grand Prix", "Phillip Island · 澳大利亚", "race", "MotoGP"),
      dateOnly("2026-11-01", "Malaysian Grand Prix", "Sepang · 马来西亚", "race", "MotoGP"),
      dateOnly("2026-11-15", "Portuguese Grand Prix", "Portimao · 葡萄牙", "race", "MotoGP"),
      dateOnly("2026-11-22", "Valencian Grand Prix", "Valencia · 西班牙", "race", "MotoGP")
    ]
  }
];

const driverSeeds = [
  ["Alexander Albon", "Williams", ["f1"]],
  ["Fernando Alonso", "Aston Martin", ["f1"]],
  ["Andrea Kimi Antonelli", "Mercedes", ["f1"]],
  ["Oliver Bearman", "Haas", ["f1"]],
  ["Gabriel Bortoleto", "Audi", ["f1"]],
  ["Valtteri Bottas", "Cadillac", ["f1"]],
  ["Franco Colapinto", "Alpine", ["f1"]],
  ["Pierre Gasly", "Alpine", ["f1"]],
  ["Lewis Hamilton", "Ferrari", ["f1"]],
  ["Isack Hadjar", "Red Bull Racing", ["f1"]],
  ["Nico Hulkenberg", "Audi", ["f1"]],
  ["Liam Lawson", "Racing Bulls", ["f1"]],
  ["Charles Leclerc", "Ferrari", ["f1"]],
  ["Arvid Lindblad", "Racing Bulls", ["f1"]],
  ["Lando Norris", "McLaren", ["f1"]],
  ["Esteban Ocon", "Haas", ["f1"]],
  ["Oscar Piastri", "McLaren", ["f1"]],
  ["Sergio Perez", "Cadillac", ["f1"]],
  ["George Russell", "Mercedes", ["f1"]],
  ["Carlos Sainz", "Williams", ["f1"]],
  ["Lance Stroll", "Aston Martin", ["f1"]],
  ["Max Verstappen", "Red Bull Racing", ["f1", "nls"]],

  ["Jake Dennis", "Andretti Formula E", ["fe"]],
  ["Felipe Drugovich", "Andretti Formula E", ["fe"]],
  ["Antonio Felix da Costa", "Jaguar TCS Racing / Alpine Endurance Team", ["fe", "wec"]],
  ["Lucas di Grassi", "Lola Yamaha ABT", ["fe"]],
  ["Maximilian Gunther", "DS Penske", ["fe"]],
  ["Taylor Barnard", "DS Penske", ["fe"]],
  ["Zane Maloney", "Lola Yamaha ABT", ["fe"]],
  ["Edoardo Mortara", "Mahindra", ["fe"]],
  ["Nico Muller", "Porsche", ["fe"]],
  ["Norman Nato", "Nissan", ["fe"]],
  ["Pascal Wehrlein", "Porsche", ["fe"]],
  ["Jean-Eric Vergne", "Citroen Racing", ["fe"]],
  ["Oliver Rowland", "Nissan", ["fe"]],
  ["Sebastien Buemi", "Envision", ["fe"]],
  ["Nick Cassidy", "Citroen Racing", ["fe"]],
  ["Mitch Evans", "Jaguar TCS Racing", ["fe"]],
  ["Nyck de Vries", "Mahindra", ["fe"]],
  ["Dan Ticktum", "CUPRA Kiro", ["fe"]],
  ["Pepe Marti", "CUPRA Kiro", ["fe"]],
  ["Joel Eriksson", "Envision", ["fe"]],

  ["Tom Gamble", "Aston Martin THOR Team", ["wec"]],
  ["Ross Gunn", "Aston Martin THOR Team", ["wec"]],
  ["Harry Tincknell", "Aston Martin THOR Team", ["wec"]],
  ["Roman De Angelis", "Aston Martin THOR Team", ["wec"]],
  ["Alex Riberas", "Aston Martin THOR Team", ["wec"]],
  ["Marco Sorensen", "Aston Martin THOR Team", ["wec"]],
  ["Kamui Kobayashi", "Toyota Gazoo Racing / KDDI TGMGP TGR-DC", ["wec", "superformula"]],
  ["Mike Conway", "Toyota Gazoo Racing", ["wec"]],
  ["Nyck de Vries", "Toyota Gazoo Racing / Mahindra", ["fe", "wec"]],
  ["Sebastien Buemi", "Toyota Gazoo Racing / Envision", ["fe", "wec"]],
  ["Brendon Hartley", "Toyota Gazoo Racing", ["wec"]],
  ["Ryo Hirakawa", "Toyota Gazoo Racing", ["wec"]],
  ["Alex Lynn", "Cadillac Hertz Team Jota", ["wec"]],
  ["Norman Nato", "Cadillac Hertz Team Jota / Nissan", ["fe", "wec"]],
  ["Will Stevens", "Cadillac Hertz Team Jota", ["wec"]],
  ["Jack Aitken", "Cadillac Hertz Team Jota", ["wec"]],
  ["Earl Bamber", "Cadillac Hertz Team Jota", ["wec"]],
  ["Sebastien Bourdais", "Cadillac Hertz Team Jota", ["wec", "indycar"]],
  ["Kevin Magnussen", "BMW M Team WRT", ["wec"]],
  ["Raffaele Marciello", "BMW M Team WRT", ["wec", "nls"]],
  ["Dries Vanthoor", "BMW M Team WRT", ["wec", "nls"]],
  ["Robin Frijns", "BMW M Team WRT", ["wec"]],
  ["Rene Rast", "BMW M Team WRT", ["wec"]],
  ["Sheldon van der Linde", "BMW M Team WRT", ["wec", "nls"]],
  ["Pipo Derani", "Genesis Magma Racing", ["wec"]],
  ["Mathys Jaubert", "Genesis Magma Racing", ["wec"]],
  ["Andre Lotterer", "Genesis Magma Racing", ["wec"]],
  ["Paul-Loup Chatin", "Genesis Magma Racing", ["wec"]],
  ["Mathieu Jaminet", "Genesis Magma Racing", ["wec"]],
  ["Daniel Juncadella", "Genesis Magma Racing", ["wec"]],
  ["Ferdinand Habsburg", "Alpine Endurance Team", ["wec"]],
  ["Charles Milesi", "Alpine Endurance Team", ["wec"]],
  ["Jules Gounon", "Alpine Endurance Team", ["wec"]],
  ["Frederic Makowiecki", "Alpine Endurance Team", ["wec"]],
  ["Victor Martins", "Alpine Endurance Team", ["wec"]],
  ["Antonio Fuoco", "Ferrari AF Corse", ["wec"]],
  ["Miguel Molina", "Ferrari AF Corse", ["wec"]],
  ["Nicklas Nielsen", "Ferrari AF Corse", ["wec"]],
  ["James Calado", "Ferrari AF Corse", ["wec"]],
  ["Antonio Giovinazzi", "Ferrari AF Corse", ["wec"]],
  ["Alessandro Pier Guidi", "Ferrari AF Corse", ["wec"]],
  ["Phil Hanson", "AF Corse", ["wec"]],
  ["Robert Kubica", "AF Corse", ["wec"]],
  ["Yifei Ye", "AF Corse", ["wec"]],
  ["Nick Cassidy", "Peugeot TotalEnergies / Citroen Racing", ["fe", "wec"]],
  ["Paul di Resta", "Peugeot TotalEnergies", ["wec"]],
  ["Stoffel Vandoorne", "Peugeot TotalEnergies", ["wec"]],
  ["Loic Duval", "Peugeot TotalEnergies", ["wec"]],
  ["Malthe Jakobsen", "Peugeot TotalEnergies", ["wec"]],
  ["Theo Pourchaire", "Peugeot TotalEnergies", ["wec"]],
  ["Jack Doohan", "Nielsen Racing", ["wec"]],
  ["David Heinemeier Hansson", "Nielsen Racing", ["wec"]],
  ["Edward Pearson", "Nielsen Racing", ["wec"]],
  ["Jake Hughes", "Algarve Pro Racing", ["wec"]],
  ["Enzo Trulli", "Algarve Pro Racing", ["wec"]],
  ["Pietro Fittipaldi", "Vector Sport", ["wec"]],
  ["Richard Verschoor", "Duqueine Team", ["wec"]],
  ["Doriane Pin", "Duqueine Team", ["wec", "f1academy"]],
  ["Nico Muller", "Inter Europol Competition / Porsche", ["fe", "wec"]],

  ["Thierry Neuville", "Hyundai Motorsport", ["wrc"]],
  ["Martijn Wydaeghe", "Hyundai Motorsport", ["wrc"]],
  ["Adrien Fourmaux", "Hyundai Motorsport", ["wrc"]],
  ["Alexandre Coria", "Hyundai Motorsport", ["wrc"]],
  ["Esapekka Lappi", "Hyundai Motorsport", ["wrc"]],
  ["Enni Malkonen", "Hyundai Motorsport", ["wrc"]],
  ["Dani Sordo", "Hyundai Motorsport", ["wrc"]],
  ["Candido Carrera", "Hyundai Motorsport", ["wrc"]],
  ["Hayden Paddon", "Hyundai Motorsport", ["wrc"]],
  ["John Kennard", "Hyundai Motorsport", ["wrc"]],
  ["Elfyn Evans", "Toyota Gazoo Racing WRT", ["wrc"]],
  ["Scott Martin", "Toyota Gazoo Racing WRT", ["wrc"]],
  ["Takamoto Katsuta", "Toyota Gazoo Racing WRT", ["wrc"]],
  ["Aaron Johnston", "Toyota Gazoo Racing WRT", ["wrc"]],
  ["Sebastien Ogier", "Toyota Gazoo Racing WRT", ["wrc"]],
  ["Vincent Landais", "Toyota Gazoo Racing WRT", ["wrc"]],
  ["Oliver Solberg", "Toyota Gazoo Racing WRT", ["wrc"]],
  ["Elliott Edmondson", "Toyota Gazoo Racing WRT", ["wrc"]],
  ["Sami Pajari", "Toyota Gazoo Racing WRT2", ["wrc"]],
  ["Marko Salminen", "Toyota Gazoo Racing WRT2", ["wrc"]],
  ["Gregoire Munster", "M-Sport Ford", ["wrc"]],
  ["Louis Louka", "M-Sport Ford", ["wrc"]],
  ["Josh McErlean", "M-Sport Ford", ["wrc"]],
  ["Eoin Treacy", "M-Sport Ford", ["wrc"]],
  ["Jon Armstrong", "M-Sport Ford", ["wrc"]],
  ["Shane Byrne", "M-Sport Ford", ["wrc"]],
  ["Martins Sesks", "M-Sport Ford", ["wrc"]],
  ["Renars Francis", "M-Sport Ford", ["wrc"]],

  ["Rafael Camara", "Invicta Racing", ["f2"]],
  ["Joshua Durksen", "Invicta Racing", ["f2"]],
  ["Ritomo Miyata", "Hitech", ["f2"]],
  ["Colton Herta", "Hitech", ["f2"]],
  ["Noel Leon", "Campos Racing", ["f2"]],
  ["Nikola Tsolov", "Campos Racing", ["f2"]],
  ["Dino Beganovic", "DAMS Lucas Oil", ["f2"]],
  ["Roman Bilinski", "DAMS Lucas Oil", ["f2"]],
  ["Gabriele Mini", "MP Motorsport", ["f2"]],
  ["Oliver Goethe", "MP Motorsport", ["f2"]],
  ["Sebastian Montoya", "Prema Racing", ["f2"]],
  ["Mari Boya", "Prema Racing", ["f2"]],
  ["Martinius Stenshorne", "Rodin Motorsport", ["f2"]],
  ["Alex Dunne", "Rodin Motorsport", ["f2"]],
  ["Kush Maini", "ART Grand Prix", ["f2"]],
  ["Tasanapol Inthraphuvasak", "ART Grand Prix", ["f2"]],
  ["Emerson Fittipaldi Jr.", "AIX Racing", ["f2"]],
  ["Cian Shields", "AIX Racing", ["f2"]],
  ["Nico Varrone", "Van Amersfoort Racing", ["f2"]],
  ["Rafael Villagomez", "Van Amersfoort Racing", ["f2"]],
  ["Laurens van Hoepen", "Trident", ["f2"]],
  ["John Bennett", "Trident", ["f2"]],

  ["Theophile Nael", "Campos Racing", ["f3"]],
  ["Ugo Ugochukwu", "Campos Racing", ["f3"]],
  ["Ernesto Rivera", "Campos Racing", ["f3"]],
  ["Noah Stromsted", "Trident", ["f3"]],
  ["Freddie Slater", "Trident", ["f3"]],
  ["Matteo De Palo", "Trident", ["f3"]],
  ["Mattia Colnaghi", "MP Motorsport", ["f3"]],
  ["Tuukka Taponen", "MP Motorsport", ["f3"]],
  ["Alessandro Giusti", "MP Motorsport", ["f3"]],
  ["Taito Kato", "ART Grand Prix", ["f3"]],
  ["Maciej Gladysz", "ART Grand Prix", ["f3"]],
  ["Kanato Le", "ART Grand Prix", ["f3"]],
  ["Hiyu Yamakoshi", "Van Amersfoort Racing", ["f3"]],
  ["Enzo Deligny", "Van Amersfoort Racing", ["f3"]],
  ["Bruno del Pino", "Van Amersfoort Racing", ["f3"]],
  ["Pedro Clerot", "Rodin Motorsport", ["f3"]],
  ["Brando Badoer", "Rodin Motorsport", ["f3"]],
  ["Christian Ho", "Rodin Motorsport", ["f3"]],
  ["Louis Sharp", "Prema Racing", ["f3"]],
  ["James Wharton", "Prema Racing", ["f3"]],
  ["Jose Garfias", "Prema Racing", ["f3"]],
  ["Michael Shin", "Hitech", ["f3"]],
  ["Fionn McLaughlin", "Hitech", ["f3"]],
  ["Jin Nakamura", "Hitech", ["f3"]],
  ["Yevan David", "AIX Racing", ["f3"]],
  ["Fernando Barrichello", "AIX Racing", ["f3"]],
  ["Salim Hanna", "AIX Racing", ["f3"]],
  ["Nicola Lacorte", "DAMS Lucas Oil", ["f3"]],
  ["Nandhavud Bhirombhakdi", "DAMS Lucas Oil", ["f3"]],
  ["Gerrard Xie", "DAMS Lucas Oil", ["f3"]],

  ["Nina Gademan", "MP Motorsport / Alpine", ["f1academy"]],
  ["Alba Hurup Larsen", "MP Motorsport / Ferrari", ["f1academy"]],
  ["Esmee Kosterman", "MP Motorsport", ["f1academy"]],
  ["Megan Bruce", "Campos Racing", ["f1academy"]],
  ["Rafaela Ferreira", "Campos Racing / Racing Bulls", ["f1academy"]],
  ["Alisha Palmowski", "Campos Racing / Red Bull Racing", ["f1academy"]],
  ["Emma Felbermayr", "Rodin Motorsport / Audi", ["f1academy"]],
  ["Ella Lloyd", "Rodin Motorsport / McLaren", ["f1academy"]],
  ["Ella Stevens", "Rodin Motorsport", ["f1academy"]],
  ["Mathilda Paatz", "Prema Racing / Aston Martin", ["f1academy"]],
  ["Payton Westcott", "Prema Racing / Mercedes", ["f1academy"]],
  ["Natalia Granada", "Prema Racing", ["f1academy"]],
  ["Lisa Billard", "ART Grand Prix", ["f1academy"]],
  ["Kaylee Countryman", "ART Grand Prix / Haas", ["f1academy"]],
  ["Jade Jacquet", "ART Grand Prix / Williams", ["f1academy"]],
  ["Ava Dobson", "Hitech TGR", ["f1academy"]],
  ["Rachel Robertson", "Hitech TGR", ["f1academy"]],
  ["Shi Wei", "Hitech TGR", ["f1academy"]],

  ["Ayumu Iwasa", "Team Mugen", ["superformula"]],
  ["Tomoki Nojiri", "Team Mugen", ["superformula"]],
  ["Luke Browning", "Realize Kondo Racing", ["superformula"]],
  ["Ukyo Sasahara", "Realize Kondo Racing", ["superformula"]],
  ["Roman Stanek", "Navikuru Buzz MK Racing", ["superformula"]],
  ["Tadasuke Makino", "Docomo Team Dandelion Racing", ["superformula"]],
  ["Kakunoshin Ohta", "Docomo Team Dandelion Racing", ["superformula"]],
  ["Kamui Kobayashi", "KDDI TGMGP TGR-DC", ["wec", "superformula"]],
  ["Yuto Nomura", "Kids com Team KCMG", ["superformula"]],
  ["Ren Sato", "PONOS Nakajima Racing", ["superformula"]],
  ["Igor Omura Fraga", "PONOS Nakajima Racing", ["superformula"]],
  ["Kenta Yamashita", "Kids com Team KCMG", ["superformula", "wec"]],
  ["Seita Nonaka", "Kids com Team KCMG", ["superformula"]],
  ["Nirei Fukuzumi", "Rookie Racing", ["superformula"]],
  ["Zak O'Sullivan", "Team Impul", ["superformula"]],
  ["Sho Tsuboi", "Vantelin Team TOM'S", ["superformula"]],
  ["Ritomo Miyata", "Hitech", ["f2"]],

  ["Alex Palou", "Chip Ganassi Racing", ["indycar"]],
  ["Alexander Rossi", "Ed Carpenter Racing", ["indycar"]],
  ["Callum Ilott", "Prema Racing", ["indycar"]],
  ["Christian Lundgaard", "Arrow McLaren", ["indycar"]],
  ["Conor Daly", "Juncos Hollinger Racing", ["indycar"]],
  ["David Malukas", "Team Penske", ["indycar"]],
  ["Devlin DeFrancesco", "Rahal Letterman Lanigan", ["indycar"]],
  ["Felix Rosenqvist", "Meyer Shank Racing", ["indycar"]],
  ["Graham Rahal", "Rahal Letterman Lanigan", ["indycar"]],
  ["Josef Newgarden", "Team Penske", ["indycar"]],
  ["Kyle Kirkwood", "Andretti Global", ["indycar"]],
  ["Kyffin Simpson", "Chip Ganassi Racing", ["indycar"]],
  ["Louis Foster", "Rahal Letterman Lanigan", ["indycar"]],
  ["Marcus Armstrong", "Meyer Shank Racing", ["indycar"]],
  ["Marcus Ericsson", "Andretti Global", ["indycar"]],
  ["Pato O'Ward", "Arrow McLaren", ["indycar"]],
  ["Rinus VeeKay", "Dale Coyne Racing", ["indycar"]],
  ["Robert Shwartzman", "Prema Racing", ["indycar"]],
  ["Santino Ferrucci", "A.J. Foyt Enterprises", ["indycar"]],
  ["Scott Dixon", "Chip Ganassi Racing", ["indycar"]],
  ["Scott McLaughlin", "Team Penske", ["indycar"]],
  ["Sting Ray Robb", "Juncos Hollinger Racing", ["indycar"]],
  ["Will Power", "Andretti Global", ["indycar"]],

  ["AJ Allmendinger", "Kaulig Racing", ["nascar"]],
  ["Alex Bowman", "Hendrick Motorsports", ["nascar"]],
  ["Austin Cindric", "Team Penske", ["nascar"]],
  ["Austin Dillon", "Richard Childress Racing", ["nascar"]],
  ["Brad Keselowski", "RFK Racing", ["nascar"]],
  ["Bubba Wallace", "23XI Racing", ["nascar"]],
  ["Carson Hocevar", "Spire Motorsports", ["nascar"]],
  ["Chase Briscoe", "Joe Gibbs Racing", ["nascar"]],
  ["Chase Elliott", "Hendrick Motorsports", ["nascar"]],
  ["Chris Buescher", "RFK Racing", ["nascar"]],
  ["Christopher Bell", "Joe Gibbs Racing", ["nascar"]],
  ["Cody Ware", "Rick Ware Racing", ["nascar"]],
  ["Cole Custer", "Haas Factory Team", ["nascar"]],
  ["Connor Zilisch", "Trackhouse Racing", ["nascar"]],
  ["Daniel Suarez", "Spire Motorsports", ["nascar"]],
  ["Denny Hamlin", "Joe Gibbs Racing", ["nascar"]],
  ["Erik Jones", "Legacy Motor Club", ["nascar"]],
  ["Joey Logano", "Team Penske", ["nascar"]],
  ["Josh Berry", "Wood Brothers Racing", ["nascar"]],
  ["John Hunter Nemechek", "Legacy Motor Club", ["nascar"]],
  ["Kyle Busch", "Richard Childress Racing", ["nascar"]],
  ["Kyle Larson", "Hendrick Motorsports", ["nascar"]],
  ["Michael McDowell", "Spire Motorsports", ["nascar"]],
  ["Noah Gragson", "Front Row Motorsports", ["nascar"]],
  ["Riley Herbst", "23XI Racing", ["nascar"]],
  ["Ricky Stenhouse Jr.", "Hyak Motorsports", ["nascar"]],
  ["Ross Chastain", "Trackhouse Racing", ["nascar"]],
  ["Ryan Blaney", "Team Penske", ["nascar"]],
  ["Ryan Preece", "RFK Racing", ["nascar"]],
  ["Shane van Gisbergen", "Trackhouse Racing", ["nascar"]],
  ["Todd Gilliland", "Front Row Motorsports", ["nascar"]],
  ["Ty Gibbs", "Joe Gibbs Racing", ["nascar"]],
  ["Ty Dillon", "Kaulig Racing", ["nascar"]],
  ["Tyler Reddick", "23XI Racing", ["nascar"]],
  ["William Byron", "Hendrick Motorsports", ["nascar"]],
  ["Zane Smith", "Front Row Motorsports", ["nascar"]],

  ["Augusto Farfus", "BMW M Team", ["nls"]],
  ["Christopher Haase", "Audi Sport", ["nls"]],
  ["Dennis Olsen", "Porsche", ["nls"]],
  ["Dirk Muller", "Mercedes-AMG", ["nls"]],
  ["Earl Bamber", "Porsche / Cadillac", ["nls", "wec", "wec"]],
  ["Frederic Vervisch", "Audi Sport", ["nls"]],
  ["Kelvin van der Linde", "Audi Sport", ["nls"]],
  ["Luca Stolz", "Mercedes-AMG", ["nls"]],
  ["Maro Engel", "Mercedes-AMG", ["nls"]],
  ["Nicki Thiim", "Aston Martin", ["nls", "wec"]],
  ["Nico Bastian", "Mercedes-AMG", ["nls"]],
  ["Thomas Preining", "Porsche", ["nls"]],

  ["Ai Ogura", "Trackhouse MotoGP Team", ["motogp"]],
  ["Alex Marquez", "BK8 Gresini Racing MotoGP", ["motogp"]],
  ["Alex Rins", "Monster Energy Yamaha MotoGP Team", ["motogp"]],
  ["Brad Binder", "Red Bull KTM", ["motogp"]],
  ["Enea Bastianini", "Tech3 KTM", ["motogp"]],
  ["Fabio Di Giannantonio", "Pertamina Enduro VR46 Racing Team", ["motogp"]],
  ["Fabio Quartararo", "Monster Energy Yamaha MotoGP Team", ["motogp"]],
  ["Fermin Aldeguer", "BK8 Gresini Racing MotoGP", ["motogp"]],
  ["Francesco Bagnaia", "Ducati Lenovo", ["motogp"]],
  ["Franco Morbidelli", "Pertamina Enduro VR46 Racing Team", ["motogp"]],
  ["Jack Miller", "Pramac Yamaha", ["motogp"]],
  ["Joan Mir", "Honda HRC", ["motogp"]],
  ["Johann Zarco", "LCR Honda", ["motogp"]],
  ["Jorge Martin", "Aprilia Racing", ["motogp"]],
  ["Luca Marini", "Honda HRC", ["motogp"]],
  ["Maverick Vinales", "Tech3 KTM", ["motogp"]],
  ["Marco Bezzecchi", "Aprilia Racing", ["motogp"]],
  ["Marc Marquez", "Ducati Lenovo", ["motogp"]],
  ["Pedro Acosta", "Red Bull KTM", ["motogp"]],
  ["Raul Fernandez", "Trackhouse Racing", ["motogp"]],
  ["Toprak Razgatlioglu", "Prima Pramac Yamaha MotoGP", ["motogp"]],
  ["Diogo Moreira", "LCR Honda", ["motogp"]]
];

const catalog = {
  series: seriesCatalog,
  driver: buildDrivers(driverSeeds)
};

let mode = "series";
let selectedId = "f1";
let filter = "all";
let selectedEventKeys = new Set();
let autoSelectUpcoming = true;

const elements = {
  modeButtons: document.querySelectorAll(".mode-button"),
  searchInput: document.querySelector("#searchInput"),
  listTitle: document.querySelector("#listTitle"),
  listCount: document.querySelector("#listCount"),
  categoryList: document.querySelector("#categoryList"),
  alphaIndex: document.querySelector("#alphaIndex"),
  panelEyebrow: document.querySelector("#panelEyebrow"),
  panelTitle: document.querySelector("#panelTitle"),
  panelMeta: document.querySelector("#panelMeta"),
  selectUpcomingBtn: document.querySelector("#selectUpcomingBtn"),
  clearSelectionBtn: document.querySelector("#clearSelectionBtn"),
  reminderSelect: document.querySelector("#reminderSelect"),
  downloadBtn: document.querySelector("#downloadBtn"),
  nextRaceDate: document.querySelector("#nextRaceDate"),
  nextRaceTime: document.querySelector("#nextRaceTime"),
  eventCount: document.querySelector("#eventCount"),
  filterButtons: document.querySelectorAll(".filter-chip"),
  scheduleList: document.querySelector("#scheduleList"),
  toast: document.querySelector("#toast")
};

if (typeof history !== "undefined" && "scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.addEventListener?.("load", () => {
  window.scrollTo?.({ top: 0, left: 0, behavior: "auto" });
});

const formatters = {
  date: new Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai", month: "2-digit", day: "2-digit" }),
  time: new Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai", hour: "2-digit", minute: "2-digit", hour12: false }),
  weekday: new Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai", weekday: "short" })
};

function buildDrivers(seeds) {
  const merged = new Map();

  seeds.forEach(([name, team, seriesIds]) => {
    const id = slugify(name);
    const existing = merged.get(id);
    if (existing) {
      existing.seriesIds = [...new Set([...existing.seriesIds, ...seriesIds])];
      existing.teams = [...new Set([...existing.teams, team])];
      return;
    }
    merged.set(id, {
      id,
      name,
      sortName: name,
      teams: [team],
      seriesIds: [...new Set(seriesIds)]
    });
  });

  return [...merged.values()]
    .map((driver) => ({
      ...driver,
      tag: getInitial(driver.name),
      meta: `${driver.seriesIds.map(seriesName).join(" / ")} · ${driver.teams.slice(0, 2).join(" / ")}`,
      events: buildDriverEvents(driver)
    }))
    .sort((a, b) => a.sortName.localeCompare(b.sortName, "en"));
}

function buildDriverEvents(driver) {
  const events = driver.seriesIds
    .flatMap((seriesId) => seriesCatalog.find((series) => series.id === seriesId)?.events || [])
    .map((event) => [...event]);
  const seen = new Set();
  return events.filter((event) => {
    const key = `${event[0]}-${event[1]}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function seriesName(id) {
  return seriesCatalog.find((series) => series.id === id)?.tag || id.toUpperCase();
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function getInitial(value) {
  const char = value.trim()[0]?.toUpperCase() || "#";
  return /[A-Z]/.test(char) ? char : "#";
}

function currentItems() {
  return catalog[mode];
}

function currentItem() {
  return currentItems().find((item) => item.id === selectedId) || currentItems()[0];
}

function filteredEvents(item = currentItem()) {
  return item.events
    .map(([start, title, location, type, series, status]) => ({ start, title, location, type, series, status }))
    .filter((event) => filter === "all" || event.type === filter)
    .sort((a, b) => new Date(a.start) - new Date(b.start));
}

function eventKey(event) {
  return `${event.series}|${event.start}|${event.title}`;
}

function isUpcomingEvent(event) {
  return new Date(event.start) >= new Date();
}

function syncDefaultSelection(events) {
  const validKeys = new Set(events.map(eventKey));
  selectedEventKeys = new Set([...selectedEventKeys].filter((key) => validKeys.has(key)));
  if (autoSelectUpcoming && selectedEventKeys.size === 0) {
    events.filter(isUpcomingEvent).forEach((event) => selectedEventKeys.add(eventKey(event)));
  }
}

function selectedVisibleEvents() {
  return filteredEvents(currentItem()).filter((event) => selectedEventKeys.has(eventKey(event)) && isUpcomingEvent(event));
}

function sortedEvents(item = currentItem()) {
  return item.events
    .map(([start, title, location, type, series, status]) => ({ start, title, location, type, series, status }))
    .sort((a, b) => new Date(a.start) - new Date(b.start));
}

function nextUpcomingEvent(item = currentItem()) {
  const now = new Date();
  const events = sortedEvents(item);
  return events.find((event) => new Date(event.start) >= now) || events[events.length - 1];
}

function nextVisibleEvent(events) {
  const now = new Date();
  return events.find((event) => new Date(event.start) >= now) || events[events.length - 1];
}

function visibleItems() {
  const query = elements.searchInput.value.trim().toLowerCase();
  return currentItems().filter((item) => `${item.name} ${item.meta} ${item.tag}`.toLowerCase().includes(query));
}

function renderCategoryList() {
  const items = visibleItems();
  elements.listTitle.textContent = mode === "series" ? "赛事分类" : "车手";
  elements.listCount.textContent = items.length;
  elements.categoryList.classList.toggle("driver-address-book", mode === "driver");

  if (!items.some((item) => item.id === selectedId)) {
    selectedId = items[0]?.id || currentItems()[0].id;
  }

  if (mode === "driver") {
    renderDriverAddressBook(items);
  } else {
    renderSeriesList(items);
  }
}

function renderSeriesList(items) {
  elements.alphaIndex.innerHTML = "";
  elements.categoryList.innerHTML = items
    .map(
      (item) => `
        <button class="category-item ${item.id === selectedId ? "active" : ""}" data-id="${item.id}">
          <span class="series-icon" aria-hidden="true">${seriesIcon(item.id)}</span>
          <span>
            <strong>${item.name}</strong>
            <small>${item.meta}</small>
          </span>
          <span class="badge">${item.tag}</span>
        </button>
      `
    )
    .join("");

  bindCategoryButtons();
}

function renderDriverAddressBook(items) {
  const groups = groupByInitial(items);
  const letters = Object.keys(groups).sort();

  elements.categoryList.innerHTML = letters
    .map(
      (letter) => `
        <div class="letter-group" data-letter-group="${letter}">
          <div class="letter-header" id="letter-${letter}">${letter}</div>
          ${groups[letter]
            .map(
              (item) => `
                <button class="category-item driver-item ${item.id === selectedId ? "active" : ""}" data-id="${item.id}">
                  <span class="driver-avatar">${item.tag}</span>
                  <span class="driver-copy">
                    <strong>${item.name}</strong>
                    <small>${item.meta}</small>
                  </span>
                </button>
              `
            )
            .join("")}
        </div>
      `
    )
    .join("");

  elements.alphaIndex.innerHTML = letters
    .map((letter) => `<button class="alpha-letter" data-letter="${letter}" aria-label="跳转到 ${letter}">${letter}</button>`)
    .join("");

  bindCategoryButtons();
  bindAlphaIndex();
}

function groupByInitial(items) {
  return items.reduce((groups, item) => {
    const letter = getInitial(item.sortName);
    groups[letter] ||= [];
    groups[letter].push(item);
    return groups;
  }, {});
}

function bindCategoryButtons() {
  document.querySelectorAll(".category-item").forEach((button) => {
    button.addEventListener("click", () => {
      selectedId = button.dataset.id;
      selectedEventKeys.clear();
      autoSelectUpcoming = true;
      render();
    });
  });
}

function bindAlphaIndex() {
  document.querySelectorAll(".alpha-letter").forEach((button) => {
    button.addEventListener("click", () => {
      scrollToLetter(button.dataset.letter);
      flashToastLetter(button.dataset.letter);
    });
  });
}

function scrollToLetter(letter) {
  const target = document.querySelector(`[data-letter-group="${letter}"]`);
  if (!target) return;
  target.scrollIntoView({ behavior: "smooth", block: "start" });
}

function flashToastLetter(letter) {
  elements.toast.textContent = letter;
  elements.toast.classList.add("show", "letter-toast");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => elements.toast.classList.remove("show", "letter-toast"), 700);
}

function renderPanel() {
  const item = currentItem();
  const events = filteredEvents(item);
  const next = nextUpcomingEvent(item);
  syncDefaultSelection(events);

  elements.panelEyebrow.textContent = mode === "series" ? "2026 Season" : "Driver Calendar · 2026";
  elements.panelTitle.textContent = item.name;
  elements.panelMeta.textContent = item.meta;
  elements.eventCount.textContent = events.length;

  if (!next) {
    elements.nextRaceDate.textContent = "--";
    elements.nextRaceTime.textContent = "--:--";
    elements.scheduleList.innerHTML = `<div class="empty-state">暂未收录该车手的赛程。</div>`;
    return;
  }

  const nextDate = new Date(next.start);
  elements.nextRaceDate.textContent = formatters.date.format(nextDate).replace("/", ".");
  elements.nextRaceTime.textContent = next.status === "dateOnly" ? "待定" : formatters.time.format(nextDate);

  elements.scheduleList.innerHTML = events
    .map((event) => {
      const start = new Date(event.start);
      return `
        <article class="event-card" data-start="${start.getTime()}">
          <label class="event-select">
            <input
              type="checkbox"
              data-event-key="${eventKey(event)}"
              ${selectedEventKeys.has(eventKey(event)) && isUpcomingEvent(event) ? "checked" : ""}
              ${isUpcomingEvent(event) ? "" : "disabled"}
              aria-label="选择 ${event.title}"
            />
          </label>
          <div class="date-box">
            <span>${formatters.date.format(start).replace("/", ".")}</span>
            <small>${formatters.weekday.format(start)}</small>
          </div>
          <div class="event-main">
            <strong><span class="event-type-icon" aria-hidden="true">${eventIcon(event.type)}</span>${event.title}</strong>
            <p>${event.location}</p>
          </div>
          <div class="event-time">
            <strong>${event.status === "dateOnly" ? "待定" : formatters.time.format(start)}</strong>
            <small>${event.status === "dateOnly" ? "日期已公布" : "北京时间"} · ${typeLabel(event.type)} · ${event.series}</small>
          </div>
        </article>
      `;
    })
    .join("");

  scrollScheduleToCurrent(events);
  bindEventSelection();
  updateDownloadButton();
}

function bindEventSelection() {
  elements.scheduleList.querySelectorAll(".event-select input").forEach((input) => {
    input.addEventListener("change", () => {
      if (input.checked) {
        selectedEventKeys.add(input.dataset.eventKey);
      } else {
        selectedEventKeys.delete(input.dataset.eventKey);
      }
      updateDownloadButton();
    });
  });
}

function updateDownloadButton() {
  const count = selectedVisibleEvents().length;
  elements.downloadBtn.innerHTML =
    count > 0
      ? `<span aria-hidden="true">${svgIcon("calendar-plus")}</span>预约已选择比赛 ${count}`
      : `<span aria-hidden="true">${svgIcon("calendar-plus")}</span>请选择比赛`;
  elements.downloadBtn.disabled = count === 0;
}

function seriesIcon(id) {
  const icons = {
    f1: "gauge",
    fe: "zap",
    fe27: "zap",
    wec: "infinity",
    wrc: "route",
    f2: "gauge",
    f3: "gauge",
    f1academy: "sparkle",
    superformula: "gauge",
    indycar: "circle-dot",
    nascar: "flag",
    nls: "route",
    motogp: "circle-dot"
  };
  return svgIcon(icons[id] || "circle-dot");
}

function eventIcon(type) {
  const icons = {
    practice: "circle",
    sprintQualifying: "zap",
    sprint: "chevrons-right",
    race: "circle-dot",
    qualifying: "target",
    endurance: "infinity"
  };
  return svgIcon(icons[type] || "circle-dot");
}

function svgIcon(name) {
  const common = `class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"`;
  const paths = {
    "calendar-plus": `<path d="M8 2v4"/><path d="M16 2v4"/><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 10h18"/><path d="M12 14v4"/><path d="M10 16h4"/>`,
    "circle": `<circle cx="12" cy="12" r="8"/>`,
    "circle-dot": `<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="2" fill="currentColor" stroke="none"/>`,
    "chevrons-right": `<path d="m7 7 5 5-5 5"/><path d="m13 7 5 5-5 5"/>`,
    "flag": `<path d="M5 21V5"/><path d="M5 5c4-2 7 2 11 0v9c-4 2-7-2-11 0"/>`,
    "gauge": `<path d="M4 14a8 8 0 0 1 16 0"/><path d="M12 14l4-4"/><path d="M7 17h10"/>`,
    "grid": `<rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><rect x="14" y="14" width="6" height="6" rx="1"/>`,
    "infinity": `<path d="M7 8c-2.5 0-4 2-4 4s1.5 4 4 4c3 0 5-8 10-8 2.5 0 4 2 4 4s-1.5 4-4 4c-3 0-5-8-10-8Z"/>`,
    "route": `<circle cx="6" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M8 6h5a3 3 0 0 1 0 6h-2a3 3 0 0 0 0 6h5"/>`,
    "sparkle": `<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z"/>`,
    "target": `<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 2v3"/><path d="M12 19v3"/><path d="M2 12h3"/><path d="M19 12h3"/>`,
    "zap": `<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/>`
  };
  return `<svg ${common} aria-hidden="true">${paths[name] || paths["circle-dot"]}</svg>`;
}

function scrollScheduleToCurrent(events) {
  const target = nextVisibleEvent(events);
  if (!target) return;
  const targetTime = new Date(target.start).getTime();
  const scheduleScroller = elements.scheduleList;
  const animate = window.requestAnimationFrame || ((callback) => window.setTimeout(callback, 0));
  animate(() => {
    const card = elements.scheduleList.querySelector(`[data-start="${targetTime}"]`);
    if (!card) return;
    const top = Math.max(0, card.offsetTop - scheduleScroller.offsetTop - 2);
    scheduleScroller.scrollTo?.({ top, behavior: "auto" });
    if (!scheduleScroller.scrollTo) {
      scheduleScroller.scrollTop = top;
    }
  });
}

function typeLabel(type) {
  return {
    practice: "练习",
    sprintQualifying: "冲刺排位",
    sprint: "冲刺赛",
    race: "正赛",
    qualifying: "排位",
    endurance: "耐力赛"
  }[type] || "事项";
}

function pad(value) {
  return String(value).padStart(2, "0");
}

function toIcsDate(date) {
  return `${date.getUTCFullYear()}${pad(date.getUTCMonth() + 1)}${pad(date.getUTCDate())}T${pad(date.getUTCHours())}${pad(date.getUTCMinutes())}${pad(date.getUTCSeconds())}Z`;
}

function toIcsDateOnly(date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  })
    .formatToParts(date)
    .reduce((values, part) => {
      values[part.type] = part.value;
      return values;
    }, {});
  return `${parts.year}${parts.month}${parts.day}`;
}

function downloadIcs() {
  const item = currentItem();
  const reminderMinutes = Number(elements.reminderSelect.value);
  const events = selectedVisibleEvents();
  if (events.length === 0) {
    showToast("请选择至少一场未开始的比赛。");
    return;
  }
  const lines = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//RaceCal//Motorsport Calendar//CN", "CALSCALE:GREGORIAN"];

  events.forEach((event, index) => {
    const start = new Date(event.start);
    const end = new Date(start.getTime() + 2 * 60 * 60 * 1000);
    lines.push("BEGIN:VEVENT", `UID:${item.id}-${index}-${start.getTime()}@racecal.local`, `DTSTAMP:${toIcsDate(new Date())}`);
    if (event.status === "dateOnly") {
      const dateOnlyEnd = new Date(start.getTime() + 24 * 60 * 60 * 1000);
      lines.push(`DTSTART;VALUE=DATE:${toIcsDateOnly(start)}`, `DTEND;VALUE=DATE:${toIcsDateOnly(dateOnlyEnd)}`);
    } else {
      lines.push(`DTSTART:${toIcsDate(start)}`, `DTEND:${toIcsDate(end)}`);
    }
    lines.push(
      `SUMMARY:${escapeIcs(event.title)}`,
      `LOCATION:${escapeIcs(event.location)}`,
      `DESCRIPTION:${escapeIcs(`${item.name} · ${typeLabel(event.type)} · ${event.status === "dateOnly" ? "具体时间待定" : `北京时间 ${formatters.time.format(start)}`}`)}`
    );
    if (event.status !== "dateOnly") {
      lines.push(
        "BEGIN:VALARM",
        `TRIGGER:-PT${reminderMinutes}M`,
        "ACTION:DISPLAY",
        `DESCRIPTION:${escapeIcs(`${event.title} 即将开始`)}`,
        "END:VALARM"
      );
    }
    lines.push("END:VEVENT");
  });

  lines.push("END:VCALENDAR");

  const blob = new Blob([lines.join("\r\n")], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `${item.name.replaceAll(" ", "-")}-2026.ics`;
  anchor.click();
  URL.revokeObjectURL(url);
  showToast(`已生成 ${events.length} 个事项，提醒为提前 ${reminderMinutes} 分钟。`);
}

function escapeIcs(value) {
  return value.replaceAll("\\", "\\\\").replaceAll(",", "\\,").replaceAll(";", "\\;").replaceAll("\n", "\\n");
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.remove("letter-toast");
  elements.toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => elements.toast.classList.remove("show"), 2600);
}

function render() {
  renderCategoryList();
  renderPanel();
}

elements.modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    mode = button.dataset.mode;
    selectedId = currentItems()[0].id;
    selectedEventKeys.clear();
    autoSelectUpcoming = true;
    elements.searchInput.placeholder = mode === "series" ? "F1 / WEC / MotoGP" : "Verstappen / Alonso / Bagnaia";
    elements.modeButtons.forEach((item) => {
      item.classList.toggle("active", item === button);
      item.setAttribute("aria-selected", item === button ? "true" : "false");
    });
    render();
  });
});

elements.filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filter = button.dataset.filter;
    selectedEventKeys.clear();
    autoSelectUpcoming = true;
    elements.filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    renderPanel();
  });
});

elements.selectUpcomingBtn.addEventListener("click", () => {
  selectedEventKeys.clear();
  autoSelectUpcoming = true;
  filteredEvents(currentItem()).filter(isUpcomingEvent).forEach((event) => selectedEventKeys.add(eventKey(event)));
  renderPanel();
  showToast("已选择当前筛选下所有未开始的比赛。");
});

elements.clearSelectionBtn.addEventListener("click", () => {
  selectedEventKeys.clear();
  autoSelectUpcoming = false;
  renderPanel();
  showToast("已清空已选比赛。");
});

elements.searchInput.addEventListener("input", () => {
  selectedEventKeys.clear();
  autoSelectUpcoming = true;
  render();
});
elements.downloadBtn.addEventListener("click", downloadIcs);

render();

