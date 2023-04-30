const config = {
  server: {
    port: 3005
  },
  external: {
    orcestraPsetsUrl: "https://www.orcestra.ca/api/psets/canonical"
  },
  db: {
    host: 'root',
    port: 'root',
    dbClusterName: 'development-cluster-ptdz3.azure.mongodb.net/orcestra-new'

  }
};
module.exports = config;