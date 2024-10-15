namespace mydb;
 
entity WELL  {
    key WellCode     : String(25);                      
        WellDescription          : String(255);                    
                      
}
entity WBS  {
    key WbsCode     : String(25);                      
        WbsDescription          : String(255);                    
                      
}
entity PROJECTTYPE  {
    key ProjectCode     : String(10);                      
        ProjectDescription          : String(255);                    
                      
}
entity REQUESTTYPE  {
    key TypeCode     : String(25);                      
        TypeDescription          : String(255);                    
                      
}
entity COLLECTIONLOC  {
    key ColllocCode     : String(25);                      
        ColllocDescription          : String(255);                    
                      
}
