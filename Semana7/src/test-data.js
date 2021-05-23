const faker = require("faker");
const fs = require("fs");
const path = require("path");
const axios = require("axios");

const TYPE_DATA = {
  APRIORI: "apriori",
  SEMI: "semi",
  RANDOM: "other",
};

getLoginTestData = async (type, number) => {
  switch (type) {
    case TYPE_DATA.APRIORI:
      return await getAprioriTestLoginData(number);
    case TYPE_DATA.SEMI:
      return await getMockTestLoginData(number);
    default:
      return await getRandomTestLoginData(number);
  }
};

getAprioriTestLoginData = async (count) => {
  const testData = [];
  const jsonFile = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "login-test-data.json")).toString()
  );

  for (let index = 0; index < count; index++) {
    const fileIndex = index % jsonFile.length;
    testData.push({ ...jsonFile[fileIndex] });
  }

  return testData;
};

getMockTestLoginData = async (count) => {
  const testData = [];

  for (let index = 0; index < count; index++) {}

  return testData;
};

getRandomTestLoginData = async (count) => {
  const testData = [];

  for (let index = 0; index < count; index++) {
    testData.push({
      email: faker.internet.email(),
      password: faker.internet.password(),
    });
  }

  return testData;
};

getPostTestData = async (type, number) => {
  switch (type) {
    case TYPE_DATA.APRIORI:
      return await getAprioriTestPostData(number);
    case TYPE_DATA.SEMI:
      return await getMockTestPostData(number);
    default:
      return await getRandomTestPostData(number);
  }
};

getAprioriTestPostData = async (count) => {
  const testData = [];
  const jsonFile = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "post-test-data.json")).toString()
  );

  for (let index = 0; index < count; index++) {
    const fileIndex = index % jsonFile.length;
    testData.push({ ...jsonFile[fileIndex] });
  }

  return testData;
};

getMockTestPostData = async (count) => {
  const testData = [];
  const json = await axios.get(
    "https://my.api.mockaroo.com/posts.json?key=343e4d20"
  );

  for (let index = 0; index < count; index++) {
    const fileIndex = index % jsonFile.length;
    testData.push({
      ...json.data[fileIndex],
    });
  }

  return testData;
};

getRandomTestPostData = async (count) => {
  const testData = [];

  for (let index = 0; index < count; index++) {
    testData.push({
      titulo: faker.lorem.word(),
      contenido: faker.lorem.paragraph(),
    });
  }

  return testData;
};

getTagTestData = async (type, number) => {
  switch (type) {
    case TYPE_DATA.APRIORI:
      return await getAprioriTestTagData(number);
    case TYPE_DATA.SEMI:
      return await getMockTestTagData(number);
    default:
      return await getRandomTestTagData(number);
  }
};

getRandomTestTagData = async (count) => {
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

getAprioriTestTagData = async (count) => {
  const testData = [];
  const jsonFile = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "tag-test-data.json")).toString()
  );

  for (let index = 0; index < count; index++) {
    const fileIndex = index % jsonFile.length;
    testData.push({ ...jsonFile[fileIndex] });
  }

  return testData;
};

getMockTestTagData = async (count) => {
  const testData = [];
  const json = await axios.get(
    "https://my.api.mockaroo.com/valid_tags.json?key=4a5d83e0"
  );

  for (let index = 0; index < count; index++) {
    const fileIndex = index % jsonFile.length;
    testData.push({
      ...json.data[fileIndex],
      tagColor: json.data[index].tagColor.slice(1),
      isValid: true,
    });
  }

  return testData;
};

module.exports = {
  getTagTestData,
  getLoginTestData,
  getPostTestData,
  TYPE_DATA,
};
