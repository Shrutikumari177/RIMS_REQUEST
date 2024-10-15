const cds = require('@sap/cds');
 
 
module.exports = async ( srv) => {
    srv.on('READ', 'WELL', req => {
        return cds.run(SELECT.from('mydb.WELL'));
    });
    srv.on('READ', 'WBS', req => {
        return cds.run(SELECT.from('mydb.WBS'));
    });
    srv.on('READ', 'COLLECTIONLOC', req => {
        return cds.run(SELECT.from('mydb.COLLECTIONLOC'));
    });
    srv.on('READ', 'REQUESTTYPE', req => {
        return cds.run(SELECT.from('mydb.REQUESTTYPE'));
    });
    srv.on('READ', 'PROJECTTYPE', req => {
        return cds.run(SELECT.from('mydb.PROJECTTYPE'));
    });
   

}