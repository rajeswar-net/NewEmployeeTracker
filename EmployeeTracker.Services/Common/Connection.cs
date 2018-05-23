namespace EmployeeTracker.Services.Common
{
    using System;
    using System.Configuration;

    public class Connection : IConnection
    {
        public Connection(ConnectionStringSettings settings)
        {
            if (settings == null)
                throw new ArgumentNullException("settings", "Connection expects constructor injection for connection string settings");

            ConnectionString = settings.ConnectionString;
        }
        public string ConnectionString{get; set;}
    }


}
