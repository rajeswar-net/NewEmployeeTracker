namespace EmployeeTracker.Api.Autofac
{
    using Services.Common;
    using global::Autofac;
    using System.Configuration;
    using Services.SqlServer;
    using Services.Employees;
    using Services.Dashboards;

    public class StandardModule :Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            base.Load(builder);

            //obtain database connection string once and reuse by connection class
            var conn = ConfigurationManager.ConnectionStrings["DBConnection"];

            //Register Connection class and expose IConnection
            // by passing in the database connection information
            builder.RegisterType<Connection>()
                .As<IConnection>()
                .WithParameter("settings", conn)
                .InstancePerLifetimeScope();

            //Register repository class and expose IRepository
            builder.RegisterType<Repository>()
                .As<IRepository>()
                .InstancePerLifetimeScope();

            builder.RegisterType<EmployeeService>()
                .As<IEmployeeService>()
                .InstancePerLifetimeScope();

            builder.RegisterType<DashboardService>()
              .As<IDashboardService>()
              .InstancePerLifetimeScope();

            builder.RegisterType<Employee>()
                .As<IEmployee>()
                .InstancePerLifetimeScope();
        }
    }
}