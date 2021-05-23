const faker = require("faker");
const fs = require("fs");
const path = require("path");
const axios = require("axios");

const TYPE_DATA = {
  APRIORI: "apriori",
  SEMI: "semi",
  RANDOM: "other",
};

getTagTestData = async (type, number) => {
  switch (type) {
    case TYPE_DATA.APRIORI:
      return await getAprioriTestData(number);
    case TYPE_DATA.SEMI:
      return await getMockTestData(number);
    default:
      return await getRandomTestData(number);
  }
};

getRandomTestData = async (count) => {
  const testData = [];

  for (let index = 0; index < count; index++) {
    testData.push({
      tagName: faker.lorem.word(5),
      tagColor: faker.datatype.hexaDecimal(6),
      tagSlug: faker.lorem.slug(10),
      tagDescription: faker.lorem.sentence(),
      isValid: false,
    });
  }

  return testData;
};

getAprioriTestData = async (count) => {
  const json = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "Mock_Data.json")).toString()
  );

  const jsonElements = json.length;

  const testData = [];
  for (let index = 0; index < count; index++) {
    testData.push({ ...json[index], isValid: false });
  }

  return testData;
};

getMockTestData = async (count) => {
  const json = await axios.get(
    "https://my.api.mockaroo.com/valid_tags.json?key=4a5d83e0"
  );

  const testData = [];
  for (let index = 0; index < count; index++) {
    testData.push({
      ...json.data[index],
      tagColor: json.data[index].tagColor.slice(1),
      isValid: true,
    });
  }

  return testData;
};

module.exports = {
  getTagTestData,
  TYPE_DATA,
};
