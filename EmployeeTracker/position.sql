/****** Object:  Table [dbo].[position]    Script Date: 6/25/2018 3:41:32 PM ******/






CREATE TABLE [dbo].[position](
	[position_id] [int] IDENTITY(1,1) NOT NULL,
	[position] [nvarchar](100) NOT NULL,
	[updated_utc] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_position_id] PRIMARY KEY CLUSTERED 
(
	[position_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]


