class Config {
}

class DevelopmentConfig extends Config {
    public getAllVacationsUrl = "http://localhost:3002/api/vacations/";
    public vacationImageUrl = "http://localhost:3002/api/vacations/images/";
    public registerUrl = "http://localhost:3002/api/auth/register/";
    public loginUrl = "http://localhost:3002/api/auth/login/";
    public followUrl = "http://localhost:3002/api/followers/";
}

class ProductionConfig extends Config {
    public getAllVacationsUrl = "http://localhost:3002/api/vacations/";
    public vacationImageUrl = "http://localhost:3002/api/vacations/images/";
    public registerUrl = "http://localhost:3002/api/auth/register/";
    public loginUrl = "http://localhost:3002/api/auth/login/";
    public followUrl = "http://localhost:3002/api/followers/";

}


const config = process.env.NODE_ENV === "development" ? new DevelopmentConfig() : new ProductionConfig();

export default config;
