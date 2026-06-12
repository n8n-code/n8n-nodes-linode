import type { INodeProperties } from 'n8n-workflow';

export const databasesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					]
				}
			},
			"options": [
				{
					"name": "Get Databases Engines",
					"value": "Get Databases Engines",
					"action": "Managed Database Engines List",
					"description": "Display all available Managed Database engine types and versions. Engine IDs are used when creating new Managed Databases.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/databases/engines"
						}
					}
				},
				{
					"name": "Get Databases Engine",
					"value": "Get Databases Engine",
					"action": "Managed Database Engine View",
					"description": "Display information for a single Managed Database engine type and version.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/databases/engines/{{$parameter[\"engineId\"]}}"
						}
					}
				},
				{
					"name": "Get Databases Instances",
					"value": "Get Databases Instances",
					"action": "Managed Databases List All",
					"description": "Display all Managed Databases that are accessible by your User, regardless of engine type.\n\nFor more detailed information on a particular Database instance, make a request to its `instance_uri`.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/databases/instances"
						}
					}
				},
				{
					"name": "Get Databases Mongo DB Instances",
					"value": "Get Databases Mongo DB Instances",
					"action": "Managed MongoDB Databases List",
					"description": "Display all accessible Managed MongoDB Databases.\n\n**Note**: New MongoDB Databases cannot currently be created.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/databases/mongodb/instances"
						}
					}
				},
				{
					"name": "Delete Databases Mongo DB Instance",
					"value": "Delete Databases Mongo DB Instance",
					"action": "Managed MongoDB Database Delete",
					"description": "Remove a Managed MongoDB Database from your Account.\n\nRequires `read_write` access to the Database.\n\nThe Database must have an `active`, `failed`, or `degraded` status to perform this command.\n\nOnly unrestricted Users can access this command, and have access regardless of the acting token's OAuth scopes.\n\n**Note**: New MongoDB Databases cannot currently be created.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/databases/mongodb/instances/{{$parameter[\"instanceId\"]}}"
						}
					}
				},
				{
					"name": "Get Databases Mongo DB Instance",
					"value": "Get Databases Mongo DB Instance",
					"action": "Managed MongoDB Database View",
					"description": "Display information for a single, accessible Managed MongoDB Database.\n\n**Note**: New MongoDB Databases cannot currently be created.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/databases/mongodb/instances/{{$parameter[\"instanceId\"]}}"
						}
					}
				},
				{
					"name": "Put Databases Mongo DB Instance",
					"value": "Put Databases Mongo DB Instance",
					"action": "Managed MongoDB Database Update",
					"description": "Update a Managed MongoDB Database.\n\nRequires `read_write` access to the Database.\n\nThe Database must have an `active` status to perform this command.\n\nUpdating addresses in the `allow_list` overwrites any existing addresses.\n\n* IP addresses and ranges on this list can access the Managed Database. All other sources are blocked.\n\n* If `0.0.0.0/0` is a value in this list, then all IP addresses can access the Managed Database.\n\n* Entering an empty array (`[]`) blocks all connections (both public and private) to the Managed Database.\n\n* **Note**: Updates to the `allow_list` may take a short period of time to complete, making this command inappropriate for rapid successive updates to this property.\n\nAll Managed Databases include automatic patch updates, which apply security patches and updates to the underlying operating system of the Managed MongoDB Database. The maintenance window for these updates is configured with the Managed Database's `updates` property.\n\n* If your database cluster is configured with a single node, you will experience downtime during this maintenance window when any updates occur. It's recommended that you adjust this window to match a time that will be the least disruptive for your application and users. You may also want to consider upgrading to a high availability plan to avoid any downtime due to maintenance.\n\n* **The database software is not updated automatically.** To upgrade to a new database engine version, consider deploying a new Managed Database with your preferred version. You can then migrate your databases from the original Managed Database cluster to the new one.\n\n**Note**: New MongoDB Databases cannot currently be created.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/databases/mongodb/instances/{{$parameter[\"instanceId\"]}}"
						}
					}
				},
				{
					"name": "Get Databases Mongo DB Instance Backups",
					"value": "Get Databases Mongo DB Instance Backups",
					"action": "Managed MongoDB Database Backups List",
					"description": "Display all backups for an accessible Managed MongoDB Database.\n\nThe Database must not be provisioning to perform this command.\n\nDatabase `auto` type backups are created every 24 hours at 0:00 UTC. Each `auto` backup is retained for 7 days.\n\nDatabase `snapshot` type backups are created by accessing the **Managed MongoDB Database Backup Snapshot Create** ([POST /databases/mongodb/instances/{instanceId}/backups](/docs/api/databases/#managed-mongodb-database-backup-snapshot-create)) command.\n\n**Note**: New MongoDB Databases cannot currently be created.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/databases/mongodb/instances/{{$parameter[\"instanceId\"]}}/backups"
						}
					}
				},
				{
					"name": "Post Databases Mongo DB Instance Backup",
					"value": "Post Databases Mongo DB Instance Backup",
					"action": "Managed MongoDB Database Backup Snapshot Create",
					"description": "Creates a snapshot backup of a Managed MongoDB Database.\n\nRequires `read_write` access to the Database.\n\nUp to 3 snapshot backups for each Database can be stored at a time. If 3 snapshots have been created for a Database, one must be deleted before another can be made.\n\nBackups generated by this command have the type `snapshot`. Snapshot backups may take several minutes to complete, after which they will be accessible to view or restore.\n\nThe Database must have an `active` status to perform this command. If another backup is in progress, it must complete before a new backup can be initiated.\n\n**Note**: New MongoDB Databases cannot currently be created.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/databases/mongodb/instances/{{$parameter[\"instanceId\"]}}/backups"
						}
					}
				},
				{
					"name": "Delete Database Mongo DB Instance Backup",
					"value": "Delete Database Mongo DB Instance Backup",
					"action": "Managed MongoDB Database Backup Delete",
					"description": "Delete a single backup for an accessible Managed MongoDB Database.\n\nRequires `read_write` access to the Database.\n\nThe Database must not be provisioning to perform this command.\n\n**Note**: New MongoDB Databases cannot currently be created.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/databases/mongodb/instances/{{$parameter[\"instanceId\"]}}/backups/{{$parameter[\"backupId\"]}}"
						}
					}
				},
				{
					"name": "Get Databases Mongo DB Instance Backup",
					"value": "Get Databases Mongo DB Instance Backup",
					"action": "Managed MongoDB Database Backup View",
					"description": "Display information for a single backup for an accessible Managed MongoDB Database.\n\nThe Database must not be provisioning to perform this command.\n\n**Note**: New MongoDB Databases cannot currently be created.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/databases/mongodb/instances/{{$parameter[\"instanceId\"]}}/backups/{{$parameter[\"backupId\"]}}"
						}
					}
				},
				{
					"name": "Post Databases Mongo DB Instance Backup Restore",
					"value": "Post Databases Mongo DB Instance Backup Restore",
					"action": "Managed MongoDB Database Backup Restore",
					"description": "Restore a backup to a Managed MongoDB Database on your Account.\n\nRequires `read_write` access to the Database.\n\nThe Database must have an `active` status to perform this command.\n\n**Note**: Restoring from a backup will erase all existing data on the database instance and replace it with backup data.\n\n**Note**: Currently, restoring a backup after resetting Managed Database credentials results in a failed cluster. Please contact Customer Support if this occurs.\n\n**Note**: New MongoDB Databases cannot currently be created.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/databases/mongodb/instances/{{$parameter[\"instanceId\"]}}/backups/{{$parameter[\"backupId\"]}}/restore"
						}
					}
				},
				{
					"name": "Get Databases Mongo DB Instance Credentials",
					"value": "Get Databases Mongo DB Instance Credentials",
					"action": "Managed MongoDB Database Credentials View",
					"description": "Display the root username and password for an accessible Managed MongoDB Database.\n\nThe Database must have an `active` status to perform this command.\n\n**Note**: New MongoDB Databases cannot currently be created.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/databases/mongodb/instances/{{$parameter[\"instanceId\"]}}/credentials"
						}
					}
				},
				{
					"name": "Post Databases Mongo DB Instance Credentials Reset",
					"value": "Post Databases Mongo DB Instance Credentials Reset",
					"action": "Managed MongoDB Database Credentials Reset",
					"description": "Reset the root password for a Managed MongoDB Database.\n\nRequires `read_write` access to the Database.\n\nA new root password is randomly generated and accessible with the **Managed MongoDB Database Credentials View** ([GET /databases/mongodb/instances/{instanceId}/credentials](/docs/api/databases/#managed-mongodb-database-credentials-view)) command.\n\nOnly unrestricted Users can access this command, and have access regardless of the acting token's OAuth scopes.\n\n**Note**: Note that it may take several seconds for credentials to reset.\n\n**Note**: New MongoDB Databases cannot currently be created.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/databases/mongodb/instances/{{$parameter[\"instanceId\"]}}/credentials/reset"
						}
					}
				},
				{
					"name": "Post Databases Mongo DB Instance Patch",
					"value": "Post Databases Mongo DB Instance Patch",
					"action": "Managed MongoDB Database Patch",
					"description": "Apply security patches and updates to the underlying operating system of the Managed MongoDB Database. This function runs during regular maintenance windows, which are configurable with the **Managed MongoDB Database Update** ([PUT /databases/mongodb/instances/{instanceId}](/docs/api/databases/#managed-mongodb-database-update)) command.\nRequires `read_write` access to the Database.\n\nThe Database must have an `active` status to perform this command.\n\n**Note**:\n\n* If your database cluster is configured with a single node, you will experience downtime during this maintenance. Consider upgrading to a high availability plan to avoid any downtime due to maintenance.\n\n* **The database software is not updated automatically.** To upgrade to a new database engine version, consider deploying a new Managed Database with your preferred version. You can then migrate your databases from the original Managed Database cluster to the new one.\n\n**Note**: New MongoDB Databases cannot currently be created.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/databases/mongodb/instances/{{$parameter[\"instanceId\"]}}/patch"
						}
					}
				},
				{
					"name": "Get Databases Mongo DB Instance SSL",
					"value": "Get Databases Mongo DB Instance SSL",
					"action": "Managed MongoDB Database SSL Certificate View",
					"description": "Display the SSL CA certificate for an accessible Managed MongoDB Database.\n\nThe Database must have an `active` status to perform this command.\n\n**Note**: New MongoDB Databases cannot currently be created.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/databases/mongodb/instances/{{$parameter[\"instanceId\"]}}/ssl"
						}
					}
				},
				{
					"name": "Get Databases My SQL Instances",
					"value": "Get Databases My SQL Instances",
					"action": "Managed MySQL Databases List",
					"description": "Display all accessible Managed MySQL Databases.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/databases/mysql/instances"
						}
					}
				},
				{
					"name": "Post Databases My SQL Instances",
					"value": "Post Databases My SQL Instances",
					"action": "Managed MySQL Database Create",
					"description": "Provision a Managed MySQL Database.\n\nRestricted Users must have the `add_databases` grant to use this command.\n\nNew instances can take approximately 15 to 30 minutes to provision.\n\nThe `allow_list` is used to control access to the Managed Database.\n\n* IP addresses and ranges in this list can access the Managed Database. All other sources are blocked.\n\n* If `0.0.0.0/0` is a value in this list, then all IP addresses can access the Managed Database.\n\n* Entering an empty array (`[]`) blocks all connections (both public and private) to the Managed Database.\n\nAll Managed Databases include automatic, daily backups. Up to seven backups are automatically stored for each Managed Database, providing restore points for each day of the past week.\n\nAll Managed Databases include automatic patch updates, which apply security patches and updates to the underlying operating system of the Managed MySQL Database during configurable maintenance windows.\n\n* If your database cluster is configured with a single node, you will experience downtime during this maintenance window when any updates occur. It's recommended that you adjust this window to match a time that will be the least disruptive for your application and users. You may also want to consider upgrading to a high availability plan to avoid any downtime due to maintenance.\n\n* **The database software is not updated automatically.** To upgrade to a new database engine version, consider deploying a new Managed Database with your preferred version. You can then [migrate your databases](/docs/products/databases/managed-databases/guides/migrate-mysql/) from the original Managed Database cluster to the new one.\n\n* To modify update the maintenance window for a Database, use the **Managed MySQL Database Update** ([PUT /databases/mysql/instances/{instanceId}](/docs/api/databases/#managed-mysql-database-update)) command.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/databases/mysql/instances"
						}
					}
				},
				{
					"name": "Delete Databases My SQL Instance",
					"value": "Delete Databases My SQL Instance",
					"action": "Managed MySQL Database Delete",
					"description": "Remove a Managed MySQL Database from your Account.\n\nRequires `read_write` access to the Database.\n\nThe Database must have an `active`, `failed`, or `degraded` status to perform this command.\n\nOnly unrestricted Users can access this command, and have access regardless of the acting token's OAuth scopes.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/databases/mysql/instances/{{$parameter[\"instanceId\"]}}"
						}
					}
				},
				{
					"name": "Get Databases My SQL Instance",
					"value": "Get Databases My SQL Instance",
					"action": "Managed MySQL Database View",
					"description": "Display information for a single, accessible Managed MySQL Database.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/databases/mysql/instances/{{$parameter[\"instanceId\"]}}"
						}
					}
				},
				{
					"name": "Put Databases My SQL Instance",
					"value": "Put Databases My SQL Instance",
					"action": "Managed MySQL Database Update",
					"description": "Update a Managed MySQL Database.\n\nRequires `read_write` access to the Database.\n\nThe Database must have an `active` status to perform this command.\n\nUpdating addresses in the `allow_list` overwrites any existing addresses.\n\n* IP addresses and ranges in this list can access the Managed Database. All other sources are blocked.\n\n* If `0.0.0.0/0` is a value in this list, then all IP addresses can access the Managed Database.\n\n* Entering an empty array (`[]`) blocks all connections (both public and private) to the Managed Database.\n\n* **Note**: Updates to the `allow_list` may take a short period of time to complete, making this command inappropriate for rapid successive updates to this property.\n\nAll Managed Databases include automatic patch updates, which apply security patches and updates to the underlying operating system of the Managed MySQL Database. The maintenance window for these updates is configured with the Managed Database's `updates` property.\n\n* If your database cluster is configured with a single node, you will experience downtime during this maintenance window when any updates occur. It's recommended that you adjust this window to match a time that will be the least disruptive for your application and users. You may also want to consider upgrading to a high availability plan to avoid any downtime due to maintenance.\n\n* **The database software is not updated automatically.** To upgrade to a new database engine version, consider deploying a new Managed Database with your preferred version. You can then [migrate your databases](/docs/products/databases/managed-databases/guides/migrate-mysql/) from the original Managed Database cluster to the new one.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/databases/mysql/instances/{{$parameter[\"instanceId\"]}}"
						}
					}
				},
				{
					"name": "Get Databases My SQL Instance Backups",
					"value": "Get Databases My SQL Instance Backups",
					"action": "Managed MySQL Database Backups List",
					"description": "Display all backups for an accessible Managed MySQL Database.\n\nThe Database must not be provisioning to perform this command.\n\nDatabase `auto` type backups are created every 24 hours at 0:00 UTC. Each `auto` backup is retained for 7 days.\n\nDatabase `snapshot` type backups are created by accessing the **Managed MySQL Database Backup Snapshot Create** ([POST /databases/mysql/instances/{instanceId}/backups](/docs/api/databases/#managed-mysql-database-backup-snapshot-create)) command.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/databases/mysql/instances/{{$parameter[\"instanceId\"]}}/backups"
						}
					}
				},
				{
					"name": "Post Databases My SQL Instance Backup",
					"value": "Post Databases My SQL Instance Backup",
					"action": "Managed MySQL Database Backup Snapshot Create",
					"description": "Creates a snapshot backup of a Managed MySQL Database.\n\nRequires `read_write` access to the Database.\n\nUp to 3 snapshot backups for each Database can be stored at a time. If 3 snapshots have been created for a Database, one must be deleted before another can be made.\n\nBackups generated by this command have the type `snapshot`. Snapshot backups may take several minutes to complete, after which they will be accessible to view or restore.\n\nThe Database must have an `active` status to perform this command. If another backup is in progress, it must complete before a new backup can be initiated.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/databases/mysql/instances/{{$parameter[\"instanceId\"]}}/backups"
						}
					}
				},
				{
					"name": "Delete Database My SQL Instance Backup",
					"value": "Delete Database My SQL Instance Backup",
					"action": "Managed MySQL Database Backup Delete",
					"description": "Delete a single backup for an accessible Managed MySQL Database.\n\nRequires `read_write` access to the Database.\n\nThe Database must not be provisioning to perform this command.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/databases/mysql/instances/{{$parameter[\"instanceId\"]}}/backups/{{$parameter[\"backupId\"]}}"
						}
					}
				},
				{
					"name": "Get Databases My SQL Instance Backup",
					"value": "Get Databases My SQL Instance Backup",
					"action": "Managed MySQL Database Backup View",
					"description": "Display information for a single backup for an accessible Managed MySQL Database.\n\nThe Database must not be provisioning to perform this command.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/databases/mysql/instances/{{$parameter[\"instanceId\"]}}/backups/{{$parameter[\"backupId\"]}}"
						}
					}
				},
				{
					"name": "Post Databases My SQL Instance Backup Restore",
					"value": "Post Databases My SQL Instance Backup Restore",
					"action": "Managed MySQL Database Backup Restore",
					"description": "Restore a backup to a Managed MySQL Database on your Account.\n\nRequires `read_write` access to the Database.\n\nThe Database must have an `active` status to perform this command.\n\n**Note**: Restoring from a backup will erase all existing data on the database instance and replace it with backup data.\n\n**Note**: Currently, restoring a backup after resetting Managed Database credentials results in a failed cluster. Please contact Customer Support if this occurs.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/databases/mysql/instances/{{$parameter[\"instanceId\"]}}/backups/{{$parameter[\"backupId\"]}}/restore"
						}
					}
				},
				{
					"name": "Get Databases My SQL Instance Credentials",
					"value": "Get Databases My SQL Instance Credentials",
					"action": "Managed MySQL Database Credentials View",
					"description": "Display the root username and password for an accessible Managed MySQL Database.\n\nThe Database must have an `active` status to perform this command.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/databases/mysql/instances/{{$parameter[\"instanceId\"]}}/credentials"
						}
					}
				},
				{
					"name": "Post Databases My SQL Instance Credentials Reset",
					"value": "Post Databases My SQL Instance Credentials Reset",
					"action": "Managed MySQL Database Credentials Reset",
					"description": "Reset the root password for a Managed MySQL Database.\n\nRequires `read_write` access to the Database.\n\nA new root password is randomly generated and accessible with the **Managed MySQL Database Credentials View** ([GET /databases/mysql/instances/{instanceId}/credentials](/docs/api/databases/#managed-mysql-database-credentials-view)) command.\n\nOnly unrestricted Users can access this command, and have access regardless of the acting token's OAuth scopes.\n\n**Note**: Note that it may take several seconds for credentials to reset.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/databases/mysql/instances/{{$parameter[\"instanceId\"]}}/credentials/reset"
						}
					}
				},
				{
					"name": "Post Databases My SQL Instance Patch",
					"value": "Post Databases My SQL Instance Patch",
					"action": "Managed MySQL Database Patch",
					"description": "Apply security patches and updates to the underlying operating system of the Managed MySQL Database. This function runs during regular maintenance windows, which are configurable with the **Managed MySQL Database Update** ([PUT /databases/mysql/instances/{instanceId}](/docs/api/databases/#managed-mysql-database-update)) command.\n\nRequires `read_write` access to the Database.\n\nThe Database must have an `active` status to perform this command.\n\n**Note**\n\n* If your database cluster is configured with a single node, you will experience downtime during this maintenance. Consider upgrading to a high availability plan to avoid any downtime due to maintenance.\n\n* **The database software is not updated automatically.** To upgrade to a new database engine version, consider deploying a new Managed Database with your preferred version. You can then [migrate your databases](/docs/products/databases/managed-databases/guides/migrate-mysql/) from the original Managed Database cluster to the new one.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/databases/mysql/instances/{{$parameter[\"instanceId\"]}}/patch"
						}
					}
				},
				{
					"name": "Get Databases My SQL Instance SSL",
					"value": "Get Databases My SQL Instance SSL",
					"action": "Managed MySQL Database SSL Certificate View",
					"description": "Display the SSL CA certificate for an accessible Managed MySQL Database.\n\nThe Database must have an `active` status to perform this command.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/databases/mysql/instances/{{$parameter[\"instanceId\"]}}/ssl"
						}
					}
				},
				{
					"name": "Get Databases Postgre SQL Instances",
					"value": "Get Databases Postgre SQL Instances",
					"action": "Managed PostgreSQL Databases List",
					"description": "Display all accessible Managed PostgreSQL Databases.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/databases/postgresql/instances"
						}
					}
				},
				{
					"name": "Post Databases Postgre SQL Instances",
					"value": "Post Databases Postgre SQL Instances",
					"action": "Managed PostgreSQL Database Create",
					"description": "Provision a Managed PostgreSQL Database.\n\nRestricted Users must have the `add_databases` grant to use this command.\n\nNew instances can take approximately 15 to 30 minutes to provision.\n\nThe `allow_list` is used to control access to the Managed Database.\n\n* IP addresses and ranges in this list can access the Managed Database. All other sources are blocked.\n\n* If `0.0.0.0/0` is a value in this list, then all IP addresses can access the Managed Database.\n\n* Entering an empty array (`[]`) blocks all connections (both public and private) to the Managed Database.\n\nAll Managed Databases include automatic, daily backups. Up to seven backups are automatically stored for each Managed Database, providing restore points for each day of the past week.\n\nAll Managed Databases include automatic patch updates, which apply security patches and updates to the underlying operating system of the Managed PostgreSQL Database during configurable maintenance windows.\n\n* If your database cluster is configured with a single node, you will experience downtime during this maintenance window when any updates occur. It's recommended that you adjust this window to match a time that will be the least disruptive for your application and users. You may also want to consider upgrading to a high availability plan to avoid any downtime due to maintenance.\n\n* **The database software is not updated automatically.** To upgrade to a new database engine version, consider deploying a new Managed Database with your preferred version. You can then migrate your databases from the original Managed Database cluster to the new one.\n\n* To modify update the maintenance window for a Database, use the **Managed PostgreSQL Database Update** ([PUT /databases/postgresql/instances/{instanceId}](/docs/api/databases/#managed-postgresql-database-update)) command.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/databases/postgresql/instances"
						}
					}
				},
				{
					"name": "Delete Databases Postgre SQL Instance",
					"value": "Delete Databases Postgre SQL Instance",
					"action": "Managed PostgreSQL Database Delete",
					"description": "Remove a Managed PostgreSQL Database from your Account.\n\nRequires `read_write` access to the Database.\n\nThe Database must have an `active`, `failed`, or `degraded` status to perform this command.\n\nOnly unrestricted Users can access this command, and have access regardless of the acting token's OAuth scopes.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/databases/postgresql/instances/{{$parameter[\"instanceId\"]}}"
						}
					}
				},
				{
					"name": "Get Databases Postgre SQL Instance",
					"value": "Get Databases Postgre SQL Instance",
					"action": "Managed PostgreSQL Database View",
					"description": "Display information for a single, accessible Managed PostgreSQL Database.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/databases/postgresql/instances/{{$parameter[\"instanceId\"]}}"
						}
					}
				},
				{
					"name": "Put Databases Postgre SQL Instance",
					"value": "Put Databases Postgre SQL Instance",
					"action": "Managed PostgreSQL Database Update",
					"description": "Update a Managed PostgreSQL Database.\n\nRequires `read_write` access to the Database.\n\nThe Database must have an `active` status to perform this command.\n\nUpdating addresses in the `allow_list` overwrites any existing addresses.\n\n* IP addresses and ranges in this list can access the Managed Database. All other sources are blocked.\n\n* If `0.0.0.0/0` is a value in this list, then all IP addresses can access the Managed Database.\n\n* Entering an empty array (`[]`) blocks all connections (both public and private) to the Managed Database.\n\n* **Note**: Updates to the `allow_list` may take a short period of time to complete, making this command inappropriate for rapid successive updates to this property.\n\nAll Managed Databases include automatic patch updates, which apply security patches and updates to the underlying operating system of the Managed PostgreSQL Database. The maintenance window for these updates is configured with the Managed Database's `updates` property.\n\n* If your database cluster is configured with a single node, you will experience downtime during this maintenance window when any updates occur. It's recommended that you adjust this window to match a time that will be the least disruptive for your application and users. You may also want to consider upgrading to a high availability plan to avoid any downtime due to maintenance.\n\n* **The database software is not updated automatically.** To upgrade to a new database engine version, consider deploying a new Managed Database with your preferred version. You can then migrate your databases from the original Managed Database cluster to the new one.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/databases/postgresql/instances/{{$parameter[\"instanceId\"]}}"
						}
					}
				},
				{
					"name": "Get Databases Postgre SQL Instance Backups",
					"value": "Get Databases Postgre SQL Instance Backups",
					"action": "Managed PostgreSQL Database Backups List",
					"description": "Display all backups for an accessible Managed PostgreSQL Database.\n\nThe Database must not be provisioning to perform this command.\n\nDatabase `auto` type backups are created every 24 hours at 0:00 UTC. Each `auto` backup is retained for 7 days.\n\nDatabase `snapshot` type backups are created by accessing the **Managed PostgreSQL Database Backup Snapshot Create** ([POST /databases/postgresql/instances/{instanceId}/backups](/docs/api/databases/#managed-postgresql-database-backup-snapshot-create)) command.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/databases/postgresql/instances/{{$parameter[\"instanceId\"]}}/backups"
						}
					}
				},
				{
					"name": "Post Databases Postgre SQL Instance Backup",
					"value": "Post Databases Postgre SQL Instance Backup",
					"action": "Managed PostgreSQL Database Backup Snapshot Create",
					"description": "Creates a snapshot backup of a Managed PostgreSQL Database.\n\nRequires `read_write` access to the Database.\n\nUp to 3 snapshot backups for each Database can be stored at a time. If 3 snapshots have been created for a Database, one must be deleted before another can be made.\n\nBackups generated by this command have the type `snapshot`. Snapshot backups may take several minutes to complete, after which they will be accessible to view or restore.\n\nThe Database must have an `active` status to perform this command. If another backup is in progress, it must complete before a new backup can be initiated.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/databases/postgresql/instances/{{$parameter[\"instanceId\"]}}/backups"
						}
					}
				},
				{
					"name": "Delete Database Postgre SQL Instance Backup",
					"value": "Delete Database Postgre SQL Instance Backup",
					"action": "Managed PostgreSQL Database Backup Delete",
					"description": "Delete a single backup for an accessible Managed PostgreSQL Database.\n\nRequires `read_write` access to the Database.\n\nThe Database must not be provisioning to perform this command.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/databases/postgresql/instances/{{$parameter[\"instanceId\"]}}/backups/{{$parameter[\"backupId\"]}}"
						}
					}
				},
				{
					"name": "Get Databases Postgre SQL Instance Backup",
					"value": "Get Databases Postgre SQL Instance Backup",
					"action": "Managed PostgreSQL Database Backup View",
					"description": "Display information for a single backup for an accessible Managed PostgreSQL Database.\n\nThe Database must not be provisioning to perform this command.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/databases/postgresql/instances/{{$parameter[\"instanceId\"]}}/backups/{{$parameter[\"backupId\"]}}"
						}
					}
				},
				{
					"name": "Post Databases Postgre SQL Instance Backup Restore",
					"value": "Post Databases Postgre SQL Instance Backup Restore",
					"action": "Managed PostgreSQL Database Backup Restore",
					"description": "Restore a backup to a Managed PostgreSQL Database on your Account.\n\nRequires `read_write` access to the Database.\n\nThe Database must have an `active` status to perform this command.\n\n**Note**: Restoring from a backup will erase all existing data on the database instance and replace it with backup data.\n\n**Note**: Currently, restoring a backup after resetting Managed Database credentials results in a failed cluster. Please contact Customer Support if this occurs.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/databases/postgresql/instances/{{$parameter[\"instanceId\"]}}/backups/{{$parameter[\"backupId\"]}}/restore"
						}
					}
				},
				{
					"name": "Get Databases Postgre SQL Instance Credentials",
					"value": "Get Databases Postgre SQL Instance Credentials",
					"action": "Managed PostgreSQL Database Credentials View",
					"description": "Display the root username and password for an accessible Managed PostgreSQL Database.\n\nThe Database must have an `active` status to perform this command.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/databases/postgresql/instances/{{$parameter[\"instanceId\"]}}/credentials"
						}
					}
				},
				{
					"name": "Post Databases Postgre SQL Instance Credentials Reset",
					"value": "Post Databases Postgre SQL Instance Credentials Reset",
					"action": "Managed PostgreSQL Database Credentials Reset",
					"description": "Reset the root password for a Managed PostgreSQL Database.\n\nRequires `read_write` access to the Database.\n\nA new root password is randomly generated and accessible with the **Managed PostgreSQL Database Credentials View** ([GET /databases/postgresql/instances/{instanceId}/credentials](/docs/api/databases/#managed-postgresql-database-credentials-view)) command.\n\nOnly unrestricted Users can access this command, and have access regardless of the acting token's OAuth scopes.\n\n**Note**: Note that it may take several seconds for credentials to reset.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/databases/postgresql/instances/{{$parameter[\"instanceId\"]}}/credentials/reset"
						}
					}
				},
				{
					"name": "Post Databases Postgre SQL Instance Patch",
					"value": "Post Databases Postgre SQL Instance Patch",
					"action": "Managed PostgreSQL Database Patch",
					"description": "Apply security patches and updates to the underlying operating system of the Managed PostgreSQL Database. This function runs during regular maintenance windows, which are configurable with the **Managed PostgreSQL Database Update** ([PUT /databases/postgresql/instances/{instanceId}](/docs/api/databases/#managed-postgresql-database-update)) command.\n\nRequires `read_write` access to the Database.\n\nThe Database must have an `active` status to perform this command.\n\n**Note**\n\n* If your database cluster is configured with a single node, you will experience downtime during this maintenance. Consider upgrading to a high availability plan to avoid any downtime due to maintenance.\n\n* **The database software is not updated automatically.** To upgrade to a new database engine version, consider deploying a new Managed Database with your preferred version. You can then migrate your databases from the original Managed Database cluster to the new one.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/databases/postgresql/instances/{{$parameter[\"instanceId\"]}}/patch"
						}
					}
				},
				{
					"name": "Get Databases Postgre SQL Instance SSL",
					"value": "Get Databases Postgre SQL Instance SSL",
					"action": "Managed PostgreSQL Database SSL Certificate View",
					"description": "Display the SSL CA certificate for an accessible Managed PostgreSQL Database.\n\nThe Database must have an `active` status to perform this command.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/databases/postgresql/instances/{{$parameter[\"instanceId\"]}}/ssl"
						}
					}
				},
				{
					"name": "Get Databases Types",
					"value": "Get Databases Types",
					"action": "Managed Database Types List",
					"description": "Display all Managed Database node types. The type and number of nodes determine the resources and price of a Managed Database instance.\n\nEach Managed Database can have one node type. In the case of a high availabilty Database, all nodes are provisioned according to the chosen type.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/databases/types"
						}
					}
				},
				{
					"name": "Get Databases Type",
					"value": "Get Databases Type",
					"action": "Managed Database Type View",
					"description": "Display the details of a single Managed Database type. The type and number of nodes determine the resources and price of a Managed Database instance.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/databases/types/{{$parameter[\"typeId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /databases/engines",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases Engines"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "The page of a collection to return.",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases Engines"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "page_size",
			"description": "The number of items to return per page.",
			"default": 100,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page_size",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases Engines"
					]
				}
			}
		},
		{
			"displayName": "GET /databases/engines/{engineId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases Engine"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "The page of a collection to return.",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases Engine"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "page_size",
			"description": "The number of items to return per page.",
			"default": 100,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page_size",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases Engine"
					]
				}
			}
		},
		{
			"displayName": "GET /databases/instances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases Instances"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "The page of a collection to return.",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases Instances"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "page_size",
			"description": "The number of items to return per page.",
			"default": 100,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page_size",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases Instances"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases Instances"
					]
				}
			}
		},
		{
			"displayName": "GET /databases/mongodb/instances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases Mongo DB Instances"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "The page of a collection to return.",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases Mongo DB Instances"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "page_size",
			"description": "The number of items to return per page.",
			"default": 100,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page_size",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases Mongo DB Instances"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases Mongo DB Instances"
					]
				}
			}
		},
		{
			"displayName": "DELETE /databases/mongodb/instances/{instanceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Delete Databases Mongo DB Instance"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Delete Databases Mongo DB Instance"
					]
				}
			}
		},
		{
			"displayName": "GET /databases/mongodb/instances/{instanceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases Mongo DB Instance"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases Mongo DB Instance"
					]
				}
			}
		},
		{
			"displayName": "PUT /databases/mongodb/instances/{instanceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Put Databases Mongo DB Instance"
					]
				}
			}
		},
		{
			"displayName": "Allow List",
			"name": "allow_list",
			"type": "json",
			"default": "[\n  \"203.0.113.1/32\",\n  \"192.0.1.0/24\"\n]",
			"description": "A list of IP addresses that can access the Managed Database. Each item can be a single IP address or a range in CIDR format.\n\nBy default, this is an empty array (`[]`), which blocks all connections (both public and private) to the Managed Database.\n\nIf `0.0.0.0/0` is a value in this list, then all IP addresses can access the Managed Database.\n",
			"routing": {
				"send": {
					"property": "allow_list",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Put Databases Mongo DB Instance"
					]
				}
			}
		},
		{
			"displayName": "Label",
			"name": "label",
			"type": "string",
			"default": "example-db",
			"description": "A unique, user-defined string referring to the Managed Database.",
			"routing": {
				"send": {
					"property": "label",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Put Databases Mongo DB Instance"
					]
				}
			}
		},
		{
			"displayName": "Updates",
			"name": "updates",
			"type": "json",
			"default": "{\n  \"day_of_week\": 1,\n  \"duration\": 3,\n  \"frequency\": \"weekly\",\n  \"hour_of_day\": 0,\n  \"week_of_month\": null\n}",
			"description": "Configuration settings for automated patch update maintenance for the Managed Database.",
			"routing": {
				"send": {
					"property": "updates",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Put Databases Mongo DB Instance"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Put Databases Mongo DB Instance"
					]
				}
			}
		},
		{
			"displayName": "GET /databases/mongodb/instances/{instanceId}/backups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases Mongo DB Instance Backups"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "The page of a collection to return.",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases Mongo DB Instance Backups"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "page_size",
			"description": "The number of items to return per page.",
			"default": 100,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page_size",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases Mongo DB Instance Backups"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases Mongo DB Instance Backups"
					]
				}
			}
		},
		{
			"displayName": "POST /databases/mongodb/instances/{instanceId}/backups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Post Databases Mongo DB Instance Backup"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Label",
			"name": "label",
			"type": "string",
			"default": "db-snapshot",
			"description": "The label for the Database snapshot backup.\n\n* Must include only ASCII letters or numbers.\n* Must be unique among other backup labels for this Database.\n",
			"routing": {
				"send": {
					"property": "label",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Post Databases Mongo DB Instance Backup"
					]
				}
			}
		},
		{
			"displayName": "Target",
			"name": "target",
			"type": "options",
			"default": "primary",
			"description": "The Database cluster target.\nIf the Database is a high availability cluster, choosing `secondary` creates a snapshot backup of a replica node.\n",
			"options": [
				{
					"name": "Primary",
					"value": "primary"
				},
				{
					"name": "Secondary",
					"value": "secondary"
				}
			],
			"routing": {
				"send": {
					"property": "target",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Post Databases Mongo DB Instance Backup"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Post Databases Mongo DB Instance Backup"
					]
				}
			}
		},
		{
			"displayName": "DELETE /databases/mongodb/instances/{instanceId}/backups/{backupId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Delete Database Mongo DB Instance Backup"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Delete Database Mongo DB Instance Backup"
					]
				}
			}
		},
		{
			"displayName": "GET /databases/mongodb/instances/{instanceId}/backups/{backupId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases Mongo DB Instance Backup"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases Mongo DB Instance Backup"
					]
				}
			}
		},
		{
			"displayName": "POST /databases/mongodb/instances/{instanceId}/backups/{backupId}/restore",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Post Databases Mongo DB Instance Backup Restore"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Post Databases Mongo DB Instance Backup Restore"
					]
				}
			}
		},
		{
			"displayName": "GET /databases/mongodb/instances/{instanceId}/credentials",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases Mongo DB Instance Credentials"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases Mongo DB Instance Credentials"
					]
				}
			}
		},
		{
			"displayName": "POST /databases/mongodb/instances/{instanceId}/credentials/reset",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Post Databases Mongo DB Instance Credentials Reset"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Post Databases Mongo DB Instance Credentials Reset"
					]
				}
			}
		},
		{
			"displayName": "POST /databases/mongodb/instances/{instanceId}/patch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Post Databases Mongo DB Instance Patch"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Post Databases Mongo DB Instance Patch"
					]
				}
			}
		},
		{
			"displayName": "GET /databases/mongodb/instances/{instanceId}/ssl",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases Mongo DB Instance SSL"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases Mongo DB Instance SSL"
					]
				}
			}
		},
		{
			"displayName": "GET /databases/mysql/instances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases My SQL Instances"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "The page of a collection to return.",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases My SQL Instances"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "page_size",
			"description": "The number of items to return per page.",
			"default": 100,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page_size",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases My SQL Instances"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases My SQL Instances"
					]
				}
			}
		},
		{
			"displayName": "POST /databases/mysql/instances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Post Databases My SQL Instances"
					]
				}
			}
		},
		{
			"displayName": "Allow List",
			"name": "allow_list",
			"type": "json",
			"default": "[\n  \"203.0.113.1/32\",\n  \"192.0.1.0/24\"\n]",
			"description": "A list of IP addresses that can access the Managed Database. Each item can be a single IP address or a range in CIDR format.\n\nBy default, this is an empty array (`[]`), which blocks all connections (both public and private) to the Managed Database.\n\nIf `0.0.0.0/0` is a value in this list, then all IP addresses can access the Managed Database.\n",
			"routing": {
				"send": {
					"property": "allow_list",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Post Databases My SQL Instances"
					]
				}
			}
		},
		{
			"displayName": "Cluster Size",
			"name": "cluster_size",
			"type": "options",
			"default": 3,
			"description": "The number of Linode Instance nodes deployed to the Managed Database.\n\nChoosing 3 nodes creates a high availability cluster consisting of 1 primary node and 2 replica nodes.\n",
			"options": [
				{
					"name": "1",
					"value": 1
				},
				{
					"name": "3",
					"value": 3
				}
			],
			"routing": {
				"send": {
					"property": "cluster_size",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Post Databases My SQL Instances"
					]
				}
			}
		},
		{
			"displayName": "Encrypted",
			"name": "encrypted",
			"type": "boolean",
			"default": false,
			"description": "Whether the Managed Databases is encrypted.",
			"routing": {
				"send": {
					"property": "encrypted",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Post Databases My SQL Instances"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Engine",
			"name": "engine",
			"type": "string",
			"default": "mysql/8.0.26",
			"description": "The Managed Database engine in engine/version format.",
			"routing": {
				"send": {
					"property": "engine",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Post Databases My SQL Instances"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Label",
			"name": "label",
			"type": "string",
			"default": "example-db",
			"description": "A unique, user-defined string referring to the Managed Database.",
			"routing": {
				"send": {
					"property": "label",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Post Databases My SQL Instances"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Region",
			"name": "region",
			"type": "string",
			"default": "us-east",
			"description": "The [Region](/docs/api/regions/) ID for the Managed Database.",
			"routing": {
				"send": {
					"property": "region",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Post Databases My SQL Instances"
					]
				}
			}
		},
		{
			"displayName": "Replication Type",
			"name": "replication_type",
			"type": "options",
			"default": "semi_synch",
			"description": "The replication method used for the Managed Database.\n\nDefaults to `none` for a single cluster and `semi_synch` for a high availability cluster.\n\nMust be `none` for a single node cluster.\n\nMust be `asynch` or `semi_synch` for a high availability cluster.\n",
			"options": [
				{
					"name": "None",
					"value": "none"
				},
				{
					"name": "Asynch",
					"value": "asynch"
				},
				{
					"name": "Semi Synch",
					"value": "semi_synch"
				}
			],
			"routing": {
				"send": {
					"property": "replication_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Post Databases My SQL Instances"
					]
				}
			}
		},
		{
			"displayName": "SSL Connection",
			"name": "ssl_connection",
			"type": "boolean",
			"default": true,
			"description": "Whether to require SSL credentials to establish a connection to the Managed Database.\n\nUse the **Managed MySQL Database Credentials View** ([GET /databases/mysql/instances/{instanceId}/credentials](/docs/api/databases/#managed-mysql-database-credentials-view)) command for access information.\n",
			"routing": {
				"send": {
					"property": "ssl_connection",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Post Databases My SQL Instances"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Type",
			"name": "type",
			"type": "string",
			"default": "g6-dedicated-2",
			"description": "The Linode Instance type used by the Managed Database for its nodes.",
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Post Databases My SQL Instances"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Post Databases My SQL Instances"
					]
				}
			}
		},
		{
			"displayName": "DELETE /databases/mysql/instances/{instanceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Delete Databases My SQL Instance"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Delete Databases My SQL Instance"
					]
				}
			}
		},
		{
			"displayName": "GET /databases/mysql/instances/{instanceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases My SQL Instance"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases My SQL Instance"
					]
				}
			}
		},
		{
			"displayName": "PUT /databases/mysql/instances/{instanceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Put Databases My SQL Instance"
					]
				}
			}
		},
		{
			"displayName": "Allow List",
			"name": "allow_list",
			"type": "json",
			"default": "[\n  \"203.0.113.1/32\",\n  \"192.0.1.0/24\"\n]",
			"description": "A list of IP addresses that can access the Managed Database. Each item can be a single IP address or a range in CIDR format.\n\nBy default, this is an empty array (`[]`), which blocks all connections (both public and private) to the Managed Database.\n\nIf `0.0.0.0/0` is a value in this list, then all IP addresses can access the Managed Database.\n",
			"routing": {
				"send": {
					"property": "allow_list",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Put Databases My SQL Instance"
					]
				}
			}
		},
		{
			"displayName": "Label",
			"name": "label",
			"type": "string",
			"default": "example-db",
			"description": "A unique, user-defined string referring to the Managed Database.",
			"routing": {
				"send": {
					"property": "label",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Put Databases My SQL Instance"
					]
				}
			}
		},
		{
			"displayName": "Updates",
			"name": "updates",
			"type": "json",
			"default": "{\n  \"day_of_week\": 1,\n  \"duration\": 3,\n  \"frequency\": \"weekly\",\n  \"hour_of_day\": 0,\n  \"week_of_month\": null\n}",
			"description": "Configuration settings for automated patch update maintenance for the Managed Database.",
			"routing": {
				"send": {
					"property": "updates",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Put Databases My SQL Instance"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Put Databases My SQL Instance"
					]
				}
			}
		},
		{
			"displayName": "GET /databases/mysql/instances/{instanceId}/backups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases My SQL Instance Backups"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "The page of a collection to return.",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases My SQL Instance Backups"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "page_size",
			"description": "The number of items to return per page.",
			"default": 100,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page_size",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases My SQL Instance Backups"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases My SQL Instance Backups"
					]
				}
			}
		},
		{
			"displayName": "POST /databases/mysql/instances/{instanceId}/backups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Post Databases My SQL Instance Backup"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Label",
			"name": "label",
			"type": "string",
			"default": "db-snapshot",
			"description": "The label for the Database snapshot backup.\n\n* Must include only ASCII letters or numbers.\n* Must be unique among other backup labels for this Database.\n",
			"routing": {
				"send": {
					"property": "label",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Post Databases My SQL Instance Backup"
					]
				}
			}
		},
		{
			"displayName": "Target",
			"name": "target",
			"type": "options",
			"default": "primary",
			"description": "The Database cluster target.\nIf the Database is a high availability cluster, choosing `secondary` creates a snapshot backup of a replica node.\n",
			"options": [
				{
					"name": "Primary",
					"value": "primary"
				},
				{
					"name": "Secondary",
					"value": "secondary"
				}
			],
			"routing": {
				"send": {
					"property": "target",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Post Databases My SQL Instance Backup"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Post Databases My SQL Instance Backup"
					]
				}
			}
		},
		{
			"displayName": "DELETE /databases/mysql/instances/{instanceId}/backups/{backupId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Delete Database My SQL Instance Backup"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Delete Database My SQL Instance Backup"
					]
				}
			}
		},
		{
			"displayName": "GET /databases/mysql/instances/{instanceId}/backups/{backupId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases My SQL Instance Backup"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases My SQL Instance Backup"
					]
				}
			}
		},
		{
			"displayName": "POST /databases/mysql/instances/{instanceId}/backups/{backupId}/restore",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Post Databases My SQL Instance Backup Restore"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Post Databases My SQL Instance Backup Restore"
					]
				}
			}
		},
		{
			"displayName": "GET /databases/mysql/instances/{instanceId}/credentials",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases My SQL Instance Credentials"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases My SQL Instance Credentials"
					]
				}
			}
		},
		{
			"displayName": "POST /databases/mysql/instances/{instanceId}/credentials/reset",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Post Databases My SQL Instance Credentials Reset"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Post Databases My SQL Instance Credentials Reset"
					]
				}
			}
		},
		{
			"displayName": "POST /databases/mysql/instances/{instanceId}/patch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Post Databases My SQL Instance Patch"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Post Databases My SQL Instance Patch"
					]
				}
			}
		},
		{
			"displayName": "GET /databases/mysql/instances/{instanceId}/ssl",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases My SQL Instance SSL"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases My SQL Instance SSL"
					]
				}
			}
		},
		{
			"displayName": "GET /databases/postgresql/instances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases Postgre SQL Instances"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "The page of a collection to return.",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases Postgre SQL Instances"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "page_size",
			"description": "The number of items to return per page.",
			"default": 100,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page_size",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases Postgre SQL Instances"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases Postgre SQL Instances"
					]
				}
			}
		},
		{
			"displayName": "POST /databases/postgresql/instances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Post Databases Postgre SQL Instances"
					]
				}
			}
		},
		{
			"displayName": "Allow List",
			"name": "allow_list",
			"type": "json",
			"default": "[\n  \"203.0.113.1/32\",\n  \"192.0.1.0/24\"\n]",
			"description": "A list of IP addresses that can access the Managed Database. Each item can be a single IP address or a range in CIDR format.\n\nBy default, this is an empty array (`[]`), which blocks all connections (both public and private) to the Managed Database.\n\nIf `0.0.0.0/0` is a value in this list, then all IP addresses can access the Managed Database.\n",
			"routing": {
				"send": {
					"property": "allow_list",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Post Databases Postgre SQL Instances"
					]
				}
			}
		},
		{
			"displayName": "Cluster Size",
			"name": "cluster_size",
			"type": "options",
			"default": 3,
			"description": "The number of Linode Instance nodes deployed to the Managed Database.\n\nChoosing 3 nodes creates a high availability cluster consisting of 1 primary node and 2 replica nodes.\n",
			"options": [
				{
					"name": "1",
					"value": 1
				},
				{
					"name": "3",
					"value": 3
				}
			],
			"routing": {
				"send": {
					"property": "cluster_size",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Post Databases Postgre SQL Instances"
					]
				}
			}
		},
		{
			"displayName": "Encrypted",
			"name": "encrypted",
			"type": "boolean",
			"default": false,
			"description": "Whether the Managed Databases is encrypted.",
			"routing": {
				"send": {
					"property": "encrypted",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Post Databases Postgre SQL Instances"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Engine",
			"name": "engine",
			"type": "string",
			"default": "postgresql/13.2",
			"description": "The Managed Database engine in engine/version format.",
			"routing": {
				"send": {
					"property": "engine",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Post Databases Postgre SQL Instances"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Label",
			"name": "label",
			"type": "string",
			"default": "example-db",
			"description": "A unique, user-defined string referring to the Managed Database.",
			"routing": {
				"send": {
					"property": "label",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Post Databases Postgre SQL Instances"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Region",
			"name": "region",
			"type": "string",
			"default": "us-east",
			"description": "The [Region](/docs/api/regions/) ID for the Managed Database.",
			"routing": {
				"send": {
					"property": "region",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Post Databases Postgre SQL Instances"
					]
				}
			}
		},
		{
			"displayName": "Replication Commit Type",
			"name": "replication_commit_type",
			"type": "options",
			"default": "local",
			"description": "The synchronization level of the replicating server.\n\nMust be `local` or `off` for the `asynch` replication type.\n\nMust be `on`, `remote_write`, or `remote_apply` for the `semi_synch` replication type.\n",
			"options": [
				{
					"name": "On",
					"value": "on"
				},
				{
					"name": "Local",
					"value": "local"
				},
				{
					"name": "Remote Write",
					"value": "remote_write"
				},
				{
					"name": "Remote Apply",
					"value": "remote_apply"
				},
				{
					"name": "Off",
					"value": "off"
				}
			],
			"routing": {
				"send": {
					"property": "replication_commit_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Post Databases Postgre SQL Instances"
					]
				}
			}
		},
		{
			"displayName": "Replication Type",
			"name": "replication_type",
			"type": "options",
			"default": "semi_synch",
			"description": "The replication method used for the Managed Database.\n\nDefaults to `none` for a single cluster and `semi_synch` for a high availability cluster.\n\nMust be `none` for a single node cluster.\n\nMust be `asynch` or `semi_synch` for a high availability cluster.\n",
			"options": [
				{
					"name": "None",
					"value": "none"
				},
				{
					"name": "Asynch",
					"value": "asynch"
				},
				{
					"name": "Semi Synch",
					"value": "semi_synch"
				}
			],
			"routing": {
				"send": {
					"property": "replication_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Post Databases Postgre SQL Instances"
					]
				}
			}
		},
		{
			"displayName": "SSL Connection",
			"name": "ssl_connection",
			"type": "boolean",
			"default": true,
			"description": "Whether to require SSL credentials to establish a connection to the Managed Database.\n\nUse the **Managed PostgreSQL Database Credentials View** ([GET /databases/postgresql/instances/{instanceId}/credentials](/docs/api/databases/#managed-postgresql-database-credentials-view)) command for access information.\n",
			"routing": {
				"send": {
					"property": "ssl_connection",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Post Databases Postgre SQL Instances"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Type",
			"name": "type",
			"type": "string",
			"default": "g6-dedicated-2",
			"description": "The Linode Instance type used by the Managed Database for its nodes.",
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Post Databases Postgre SQL Instances"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Post Databases Postgre SQL Instances"
					]
				}
			}
		},
		{
			"displayName": "DELETE /databases/postgresql/instances/{instanceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Delete Databases Postgre SQL Instance"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Delete Databases Postgre SQL Instance"
					]
				}
			}
		},
		{
			"displayName": "GET /databases/postgresql/instances/{instanceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases Postgre SQL Instance"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases Postgre SQL Instance"
					]
				}
			}
		},
		{
			"displayName": "PUT /databases/postgresql/instances/{instanceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Put Databases Postgre SQL Instance"
					]
				}
			}
		},
		{
			"displayName": "Allow List",
			"name": "allow_list",
			"type": "json",
			"default": "[\n  \"203.0.113.1/32\",\n  \"192.0.1.0/24\"\n]",
			"description": "A list of IP addresses that can access the Managed Database. Each item can be a single IP address or a range in CIDR format.\n\nBy default, this is an empty array (`[]`), which blocks all connections (both public and private) to the Managed Database.\n\nIf `0.0.0.0/0` is a value in this list, then all IP addresses can access the Managed Database.\n",
			"routing": {
				"send": {
					"property": "allow_list",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Put Databases Postgre SQL Instance"
					]
				}
			}
		},
		{
			"displayName": "Label",
			"name": "label",
			"type": "string",
			"default": "example-db",
			"description": "A unique, user-defined string referring to the Managed Database.",
			"routing": {
				"send": {
					"property": "label",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Put Databases Postgre SQL Instance"
					]
				}
			}
		},
		{
			"displayName": "Updates",
			"name": "updates",
			"type": "json",
			"default": "{\n  \"day_of_week\": 1,\n  \"duration\": 3,\n  \"frequency\": \"weekly\",\n  \"hour_of_day\": 0,\n  \"week_of_month\": null\n}",
			"description": "Configuration settings for automated patch update maintenance for the Managed Database.",
			"routing": {
				"send": {
					"property": "updates",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Put Databases Postgre SQL Instance"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Put Databases Postgre SQL Instance"
					]
				}
			}
		},
		{
			"displayName": "GET /databases/postgresql/instances/{instanceId}/backups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases Postgre SQL Instance Backups"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "The page of a collection to return.",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases Postgre SQL Instance Backups"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "page_size",
			"description": "The number of items to return per page.",
			"default": 100,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page_size",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases Postgre SQL Instance Backups"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases Postgre SQL Instance Backups"
					]
				}
			}
		},
		{
			"displayName": "POST /databases/postgresql/instances/{instanceId}/backups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Post Databases Postgre SQL Instance Backup"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Label",
			"name": "label",
			"type": "string",
			"default": "db-snapshot",
			"description": "The label for the Database snapshot backup.\n\n* Must include only ASCII letters or numbers.\n* Must be unique among other backup labels for this Database.\n",
			"routing": {
				"send": {
					"property": "label",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Post Databases Postgre SQL Instance Backup"
					]
				}
			}
		},
		{
			"displayName": "Target",
			"name": "target",
			"type": "options",
			"default": "primary",
			"description": "The Database cluster target.\nIf the Database is a high availability cluster, choosing `secondary` creates a snapshot backup of a replica node.\n",
			"options": [
				{
					"name": "Primary",
					"value": "primary"
				},
				{
					"name": "Secondary",
					"value": "secondary"
				}
			],
			"routing": {
				"send": {
					"property": "target",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Post Databases Postgre SQL Instance Backup"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Post Databases Postgre SQL Instance Backup"
					]
				}
			}
		},
		{
			"displayName": "DELETE /databases/postgresql/instances/{instanceId}/backups/{backupId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Delete Database Postgre SQL Instance Backup"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Delete Database Postgre SQL Instance Backup"
					]
				}
			}
		},
		{
			"displayName": "GET /databases/postgresql/instances/{instanceId}/backups/{backupId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases Postgre SQL Instance Backup"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases Postgre SQL Instance Backup"
					]
				}
			}
		},
		{
			"displayName": "POST /databases/postgresql/instances/{instanceId}/backups/{backupId}/restore",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Post Databases Postgre SQL Instance Backup Restore"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Post Databases Postgre SQL Instance Backup Restore"
					]
				}
			}
		},
		{
			"displayName": "GET /databases/postgresql/instances/{instanceId}/credentials",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases Postgre SQL Instance Credentials"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases Postgre SQL Instance Credentials"
					]
				}
			}
		},
		{
			"displayName": "POST /databases/postgresql/instances/{instanceId}/credentials/reset",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Post Databases Postgre SQL Instance Credentials Reset"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Post Databases Postgre SQL Instance Credentials Reset"
					]
				}
			}
		},
		{
			"displayName": "POST /databases/postgresql/instances/{instanceId}/patch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Post Databases Postgre SQL Instance Patch"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Post Databases Postgre SQL Instance Patch"
					]
				}
			}
		},
		{
			"displayName": "GET /databases/postgresql/instances/{instanceId}/ssl",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases Postgre SQL Instance SSL"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases Postgre SQL Instance SSL"
					]
				}
			}
		},
		{
			"displayName": "GET /databases/types",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases Types"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "The page of a collection to return.",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases Types"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "page_size",
			"description": "The number of items to return per page.",
			"default": 100,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page_size",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases Types"
					]
				}
			}
		},
		{
			"displayName": "GET /databases/types/{typeId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases Type"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "The page of a collection to return.",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases Type"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "page_size",
			"description": "The number of items to return per page.",
			"default": 100,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page_size",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Databases"
					],
					"operation": [
						"Get Databases Type"
					]
				}
			}
		},
];
