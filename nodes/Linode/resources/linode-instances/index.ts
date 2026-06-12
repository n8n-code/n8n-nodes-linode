import type { INodeProperties } from 'n8n-workflow';

export const linodeInstancesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					]
				}
			},
			"options": [
				{
					"name": "Get Linode Instances",
					"value": "Get Linode Instances",
					"action": "Linodes List",
					"description": "Returns a paginated list of Linodes you have permission to view.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/linode/instances"
						}
					}
				},
				{
					"name": "Create Linode Instance",
					"value": "Create Linode Instance",
					"action": "Linode Create",
					"description": "Creates a Linode Instance on your Account. In order for this\nrequest to complete successfully, your User must have the `add_linodes` grant. Creating a\nnew Linode will incur a charge on your Account.\n\nLinodes can be created using one of the available Types. See\nTypes List ([GET /linode/types](/docs/api/linode-types/#types-list)) to get more\ninformation about each Type's specs and cost.\n\nLinodes can be created in any one of our available Regions, which are accessible from the\nRegions List ([GET /regions](/docs/api/regions/#regions-list)) endpoint.\n\nIn an effort to fight spam, Linode restricts outbound connections on ports 25, 465, and 587\non all Linodes for new accounts created after November 5th, 2019. For more information,\nsee [Sending Email on Linode](/docs/guides/running-a-mail-server/#sending-email-on-linode).\n\nLinodes can be created in a number of ways:\n\n* Using a Linode Public Image distribution or a Private Image you created based on another Linode.\n  * Access the Images List ([GET /images](/docs/api/images/#images-list)) endpoint with authentication to view\n    all available Images.\n  * The Linode will be `running` after it completes `provisioning`.\n  * A default config with two Disks, one being a 512 swap disk, is created.\n    * `swap_size` can be used to customize the swap disk size.\n  * Requires a `root_pass` be supplied to use for the root User's Account.\n  * It is recommended to supply SSH keys for the root User using the `authorized_keys` field.\n  * You may also supply a list of usernames via the `authorized_users` field.\n    * These users must have an SSH Key associated with your Profile first. See SSH Key Add ([POST /profile/sshkeys](/docs/api/profile/#ssh-key-add)) for more information.\n\n* Using a StackScript.\n  * See StackScripts List ([GET /linode/stackscripts](/docs/api/stackscripts/#stackscripts-list)) for\n    a list of available StackScripts.\n  * The Linode will be `running` after it completes `provisioning`.\n  * Requires a compatible Image to be supplied.\n    * See StackScript View ([GET /linode/stackscript/{stackscriptId}](/docs/api/stackscripts/#stackscript-view)) for compatible Images.\n  * Requires a `root_pass` be supplied to use for the root User's Account.\n  * It is recommended to supply SSH keys for the root User using the `authorized_keys` field.\n  * You may also supply a list of usernames via the `authorized_users` field.\n    * These users must have an SSH Key associated with your Profile first. See SSH Key Add ([POST /profile/sshkeys](/docs/api/profile/#ssh-key-add)) for more information.\n\n* Using one of your other Linode's backups.\n  * You must create a Linode large enough to accommodate the Backup's size.\n  * The Disks and Config will match that of the Linode that was backed up.\n  * The `root_pass` will match that of the Linode that was backed up.\n\n* Attached to a private VLAN.\n  * Review the `interfaces` property of the [Request Body Schema](/docs/api/linode-instances/#linode-create__request-body-schema) for details.\n  * For more information, see our guide on [Getting Started with VLANs](/docs/products/networking/vlans/get-started/).\n\n* Create an empty Linode.\n  * The Linode will remain `offline` and must be manually started.\n    * See Linode Boot ([POST /linode/instances/{linodeId}/boot](/docs/api/linode-instances/#linode-boot)).\n  * Disks and Configs must be created manually.\n  * This is only recommended for advanced use cases.\n\n**Important**: You must be an unrestricted User in order to add or modify\ntags on Linodes.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/linode/instances"
						}
					}
				},
				{
					"name": "Delete Linode Instance",
					"value": "Delete Linode Instance",
					"action": "Linode Delete",
					"description": "Deletes a Linode you have permission to `read_write`.\n\n**Deleting a Linode is a destructive action and cannot be undone.**\n\nAdditionally, deleting a Linode:\n\n  * Gives up any IP addresses the Linode was assigned.\n  * Deletes all Disks, Backups, Configs, etc.\n  * Stops billing for the Linode and its associated services. You will be billed for time used\n    within the billing period the Linode was active.\n\nLinodes that are in the process of [cloning](/docs/api/linode-instances/#linode-clone) or [backup restoration](/docs/api/linode-instances/#backup-restore) cannot be deleted.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/linode/instances/{{$parameter[\"linodeId\"]}}"
						}
					}
				},
				{
					"name": "Get Linode Instance",
					"value": "Get Linode Instance",
					"action": "Linode View",
					"description": "Get a specific Linode by ID.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/linode/instances/{{$parameter[\"linodeId\"]}}"
						}
					}
				},
				{
					"name": "Update Linode Instance",
					"value": "Update Linode Instance",
					"action": "Linode Update",
					"description": "Updates a Linode that you have permission to `read_write`.\n\n**Important**: You must be an unrestricted User in order to add or modify tags on Linodes.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/linode/instances/{{$parameter[\"linodeId\"]}}"
						}
					}
				},
				{
					"name": "Get Backups",
					"value": "Get Backups",
					"action": "Backups List",
					"description": "Returns information about this Linode's available backups.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/linode/instances/{{$parameter[\"linodeId\"]}}/backups"
						}
					}
				},
				{
					"name": "Create Snapshot",
					"value": "Create Snapshot",
					"action": "Snapshot Create",
					"description": "Creates a snapshot Backup of a Linode.\n\n**Important:** If you already have a snapshot of this Linode, this is a destructive\naction. The previous snapshot will be deleted.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/linode/instances/{{$parameter[\"linodeId\"]}}/backups"
						}
					}
				},
				{
					"name": "Cancel Backups",
					"value": "Cancel Backups",
					"action": "Backups Cancel",
					"description": "Cancels the Backup service on the given Linode. Deletes all of this Linode's existing backups forever.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/linode/instances/{{$parameter[\"linodeId\"]}}/backups/cancel"
						}
					}
				},
				{
					"name": "Enable Backups",
					"value": "Enable Backups",
					"action": "Backups Enable",
					"description": "Enables backups for the specified Linode.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/linode/instances/{{$parameter[\"linodeId\"]}}/backups/enable"
						}
					}
				},
				{
					"name": "Get Backup",
					"value": "Get Backup",
					"action": "Backup View",
					"description": "Returns information about a Backup.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/linode/instances/{{$parameter[\"linodeId\"]}}/backups/{{$parameter[\"backupId\"]}}"
						}
					}
				},
				{
					"name": "Restore Backup",
					"value": "Restore Backup",
					"action": "Backup Restore",
					"description": "Restores a Linode's Backup to the specified Linode.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/linode/instances/{{$parameter[\"linodeId\"]}}/backups/{{$parameter[\"backupId\"]}}/restore"
						}
					}
				},
				{
					"name": "Boot Linode Instance",
					"value": "Boot Linode Instance",
					"action": "Linode Boot",
					"description": "Boots a Linode you have permission to modify. If no parameters are given, a Config profile\nwill be chosen for this boot based on the following criteria:\n\n* If there is only one Config profile for this Linode, it will be used.\n* If there is more than one Config profile, the last booted config will be used.\n* If there is more than one Config profile and none were the last to be booted (because the\n  Linode was never booted or the last booted config was deleted) an error will be returned.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/linode/instances/{{$parameter[\"linodeId\"]}}/boot"
						}
					}
				},
				{
					"name": "Clone Linode Instance",
					"value": "Clone Linode Instance",
					"action": "Linode Clone",
					"description": "You can clone your Linode's existing Disks or Configuration profiles to\nanother Linode on your Account. In order for this request to complete\nsuccessfully, your User must have the `add_linodes` grant. Cloning to a\nnew Linode will incur a charge on your Account.\n\nIf cloning to an existing Linode, any actions currently running or\nqueued must be completed first before you can clone to it.\n\nUp to five clone operations from any given source Linode can be run concurrently.\nIf more concurrent clones are attempted, an HTTP 400 error will be\nreturned by this endpoint.\n\nAny [tags](/docs/api/tags/#tags-list) existing on the source Linode will be cloned to the target Linode.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/linode/instances/{{$parameter[\"linodeId\"]}}/clone"
						}
					}
				},
				{
					"name": "Get Linode Configs",
					"value": "Get Linode Configs",
					"action": "Configuration Profiles List",
					"description": "Lists Configuration profiles associated with a Linode.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/linode/instances/{{$parameter[\"linodeId\"]}}/configs"
						}
					}
				},
				{
					"name": "Add Linode Config",
					"value": "Add Linode Config",
					"action": "Configuration Profile Create",
					"description": "Adds a new Configuration profile to a Linode.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/linode/instances/{{$parameter[\"linodeId\"]}}/configs"
						}
					}
				},
				{
					"name": "Delete Linode Config",
					"value": "Delete Linode Config",
					"action": "Configuration Profile Delete",
					"description": "Deletes the specified Configuration profile from the specified Linode.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/linode/instances/{{$parameter[\"linodeId\"]}}/configs/{{$parameter[\"configId\"]}}"
						}
					}
				},
				{
					"name": "Get Linode Config",
					"value": "Get Linode Config",
					"action": "Configuration Profile View",
					"description": "Returns information about a specific Configuration profile.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/linode/instances/{{$parameter[\"linodeId\"]}}/configs/{{$parameter[\"configId\"]}}"
						}
					}
				},
				{
					"name": "Update Linode Config",
					"value": "Update Linode Config",
					"action": "Configuration Profile Update",
					"description": "Updates a Configuration profile.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/linode/instances/{{$parameter[\"linodeId\"]}}/configs/{{$parameter[\"configId\"]}}"
						}
					}
				},
				{
					"name": "Get Linode Disks",
					"value": "Get Linode Disks",
					"action": "Disks List",
					"description": "View Disk information for Disks associated with this Linode.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/linode/instances/{{$parameter[\"linodeId\"]}}/disks"
						}
					}
				},
				{
					"name": "Add Linode Disk",
					"value": "Add Linode Disk",
					"action": "Disk Create",
					"description": "Adds a new Disk to a Linode.\n\n* You can optionally create a Disk from an Image or an Empty Disk if no Image is provided with a request.\n\n* When creating an Empty Disk, providing a `label` is required.\n\n* If no `label` is provided, an `image` is required instead.\n\n* When creating a Disk from an Image, `root_pass` is required.\n\n* The default filesystem for new Disks is `ext4`. If creating a Disk from an Image, the filesystem\nof the Image is used unless otherwise specified.\n\n* When deploying a StackScript on a Disk:\n  * See StackScripts List ([GET /linode/stackscripts](/docs/api/stackscripts/#stackscripts-list)) for\n    a list of available StackScripts.\n  * Requires a compatible Image to be supplied.\n    * See StackScript View ([GET /linode/stackscript/{stackscriptId}](/docs/api/stackscripts/#stackscript-view)) for compatible Images.\n  * It is recommended to supply SSH keys for the root User using the `authorized_keys` field.\n  * You may also supply a list of usernames via the `authorized_users` field.\n    * These users must have an SSH Key associated with their Profiles first. See SSH Key Add ([POST /profile/sshkeys](/docs/api/profile/#ssh-key-add)) for more information.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/linode/instances/{{$parameter[\"linodeId\"]}}/disks"
						}
					}
				},
				{
					"name": "Delete Disk",
					"value": "Delete Disk",
					"action": "Disk Delete",
					"description": "Deletes a Disk you have permission to `read_write`.\n\n**Deleting a Disk is a destructive action and cannot be undone.**\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/linode/instances/{{$parameter[\"linodeId\"]}}/disks/{{$parameter[\"diskId\"]}}"
						}
					}
				},
				{
					"name": "Get Linode Disk",
					"value": "Get Linode Disk",
					"action": "Disk View",
					"description": "View Disk information for a Disk associated with this Linode.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/linode/instances/{{$parameter[\"linodeId\"]}}/disks/{{$parameter[\"diskId\"]}}"
						}
					}
				},
				{
					"name": "Update Disk",
					"value": "Update Disk",
					"action": "Disk Update",
					"description": "Updates a Disk that you have permission to `read_write`.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/linode/instances/{{$parameter[\"linodeId\"]}}/disks/{{$parameter[\"diskId\"]}}"
						}
					}
				},
				{
					"name": "Clone Linode Disk",
					"value": "Clone Linode Disk",
					"action": "Disk Clone",
					"description": "Copies a disk, byte-for-byte, into a new Disk belonging to the same Linode. The Linode must have enough storage space available to accept a new Disk of the same size as this one or this operation will fail.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/linode/instances/{{$parameter[\"linodeId\"]}}/disks/{{$parameter[\"diskId\"]}}/clone"
						}
					}
				},
				{
					"name": "Reset Disk Password",
					"value": "Reset Disk Password",
					"action": "Disk Root Password Reset",
					"description": "Resets the password of a Disk you have permission to `read_write`.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/linode/instances/{{$parameter[\"linodeId\"]}}/disks/{{$parameter[\"diskId\"]}}/password"
						}
					}
				},
				{
					"name": "Resize Disk",
					"value": "Resize Disk",
					"action": "Disk Resize",
					"description": "Resizes a Disk you have permission to `read_write`.\n\nThe Disk must not be in use. If the Disk is in use, the request will\nsucceed but the resize will ultimately fail. For a request to succeed,\nthe Linode must be shut down prior to resizing the Disk, or the Disk\nmust not be assigned to the Linode's active Configuration Profile.\n\nIf you are resizing the Disk to a smaller size, it cannot be made smaller\nthan what is required by the total size of the files current on the Disk.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/linode/instances/{{$parameter[\"linodeId\"]}}/disks/{{$parameter[\"diskId\"]}}/resize"
						}
					}
				},
				{
					"name": "Get Linode Firewalls",
					"value": "Get Linode Firewalls",
					"action": "Firewalls List",
					"description": "View Firewall information for Firewalls associated with this Linode.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/linode/instances/{{$parameter[\"linodeId\"]}}/firewalls"
						}
					}
				},
				{
					"name": "Get Linode I Ps",
					"value": "Get Linode I Ps",
					"action": "Networking Information List",
					"description": "Returns networking information for a single Linode.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/linode/instances/{{$parameter[\"linodeId\"]}}/ips"
						}
					}
				},
				{
					"name": "Add Linode IP",
					"value": "Add Linode IP",
					"action": "IPv4 Address Allocate",
					"description": "Allocates a public or private IPv4 address to a Linode. Public IP Addresses, after the one included with each Linode, incur an additional monthly charge. If you need an additional public IP Address you must request one - please [open a support ticket](/docs/api/support/#support-ticket-open). You may not add more than one private IPv4 address to a single Linode.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/linode/instances/{{$parameter[\"linodeId\"]}}/ips"
						}
					}
				},
				{
					"name": "Remove Linode IP",
					"value": "Remove Linode IP",
					"action": "IPv4 Address Delete",
					"description": "Deletes a public or private IPv4 address associated with this Linode. This will fail if it is the Linode's last remaining public IPv4 address.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/linode/instances/{{$parameter[\"linodeId\"]}}/ips/{{$parameter[\"address\"]}}"
						}
					}
				},
				{
					"name": "Get Linode IP",
					"value": "Get Linode IP",
					"action": "IP Address View",
					"description": "View information about the specified IP address associated with the specified Linode.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/linode/instances/{{$parameter[\"linodeId\"]}}/ips/{{$parameter[\"address\"]}}"
						}
					}
				},
				{
					"name": "Update Linode IP",
					"value": "Update Linode IP",
					"action": "IP Address Update",
					"description": "Updates a the reverse DNS (RDNS) for a particular IP Address associated with this Linode.\n\nSetting the RDNS to `null` for a public IPv4 address, resets it to the default \"ip.linodeusercontent.com\" RDNS value.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/linode/instances/{{$parameter[\"linodeId\"]}}/ips/{{$parameter[\"address\"]}}"
						}
					}
				},
				{
					"name": "Migrate Linode Instance",
					"value": "Migrate Linode Instance",
					"action": "DC Migration/Pending Host Migration Initiate",
					"description": "Initiate a pending host migration that has been scheduled by Linode or initiate a cross data center (DC) migration.  A list of pending migrations, if any, can be accessed from [GET /account/notifications](/docs/api/account/#notifications-list). When the migration begins, your Linode will be shutdown if not already off. If the migration initiated the shutdown, it will reboot the Linode when completed.\n\nTo initiate a cross DC migration, you must pass a `region` parameter to the request body specifying the target data center region. You can view a list of all available regions and their feature capabilities from [GET /regions](/docs/api/regions/#regions-list). If your Linode has a DC migration already queued or you have initiated a previously scheduled migration, you will not be able to initiate a DC migration until it has completed.\n\n**Note:** Next Generation Network (NGN) data centers do not support IPv6 `/116` pools or IP Failover. If you have these features enabled on your Linode and attempt to migrate to an NGN data center, the migration will not initiate. If a Linode cannot be migrated because of an incompatibility, you will be prompted to select a different data center or contact support.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/linode/instances/{{$parameter[\"linodeId\"]}}/migrate"
						}
					}
				},
				{
					"name": "Mutate Linode Instance",
					"value": "Mutate Linode Instance",
					"action": "Linode Upgrade",
					"description": "Linodes created with now-deprecated Types are entitled to a free upgrade to the next generation. A mutating Linode will be allocated any new resources the upgraded Type provides, and will be subsequently restarted if it was currently running.\nIf any actions are currently running or queued, those actions must be completed first before you can initiate a mutate.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/linode/instances/{{$parameter[\"linodeId\"]}}/mutate"
						}
					}
				},
				{
					"name": "Get Linode Node Balancers",
					"value": "Get Linode Node Balancers",
					"action": "Linode NodeBalancers View",
					"description": "Returns a list of NodeBalancers that are assigned to this Linode and readable by the requesting User.\n\nRead permission to a NodeBalancer can be given to a User by accessing the User's Grants Update\n([PUT /account/users/{username}/grants](/docs/api/account/#users-grants-update)) endpoint.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/linode/instances/{{$parameter[\"linodeId\"]}}/nodebalancers"
						}
					}
				},
				{
					"name": "Reset Linode Password",
					"value": "Reset Linode Password",
					"action": "Linode Root Password Reset",
					"description": "Resets the root password for this Linode.\n* Your Linode must be [shut down](/docs/api/linode-instances/#linode-shut-down) for a password reset to complete.\n* If your Linode has more than one disk (not counting its swap disk), use the [Reset Disk Root Password](/docs/api/linode-instances/#disk-root-password-reset) endpoint to update a specific disk's root password.\n* A `password_reset` event is generated when a root password reset is successful.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/linode/instances/{{$parameter[\"linodeId\"]}}/password"
						}
					}
				},
				{
					"name": "Reboot Linode Instance",
					"value": "Reboot Linode Instance",
					"action": "Linode Reboot",
					"description": "Reboots a Linode you have permission to modify. If any actions are currently running or queued, those actions must be completed first before you can initiate a reboot.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/linode/instances/{{$parameter[\"linodeId\"]}}/reboot"
						}
					}
				},
				{
					"name": "Rebuild Linode Instance",
					"value": "Rebuild Linode Instance",
					"action": "Linode Rebuild",
					"description": "Rebuilds a Linode you have the `read_write` permission to modify.\nA rebuild will first shut down the Linode, delete all disks and configs on the Linode, and then deploy a new `image` to the Linode with the given attributes. Additionally:\n\n  * Requires an `image` be supplied.\n  * Requires a `root_pass` be supplied to use for the root User's Account.\n  * It is recommended to supply SSH keys for the root User using the\n    `authorized_keys` field.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/linode/instances/{{$parameter[\"linodeId\"]}}/rebuild"
						}
					}
				},
				{
					"name": "Rescue Linode Instance",
					"value": "Rescue Linode Instance",
					"action": "Linode Boot into Rescue Mode",
					"description": "Rescue Mode is a safe environment for performing many system recovery and disk management tasks. Rescue Mode is based on the Finnix recovery distribution, a self-contained and bootable Linux distribution. You can also use Rescue Mode for tasks other than disaster recovery, such as formatting disks to use different filesystems, copying data between disks, and downloading files from a disk via SSH and SFTP.\n* Note that \"sdh\" is reserved and unavailable during rescue.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/linode/instances/{{$parameter[\"linodeId\"]}}/rescue"
						}
					}
				},
				{
					"name": "Resize Linode Instance",
					"value": "Resize Linode Instance",
					"action": "Linode Resize",
					"description": "Resizes a Linode you have the `read_write` permission to a different Type. If any actions are currently running or queued, those actions must be completed first before you can initiate a resize. Additionally, the following criteria must be met in order to resize a Linode:\n\n  * The Linode must not have a pending migration.\n  * Your Account cannot have an outstanding balance.\n  * The Linode must not have more disk allocation than the new Type allows.\n    * In that situation, you must first delete or resize the disk to be smaller.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/linode/instances/{{$parameter[\"linodeId\"]}}/resize"
						}
					}
				},
				{
					"name": "Shutdown Linode Instance",
					"value": "Shutdown Linode Instance",
					"action": "Linode Shut Down",
					"description": "Shuts down a Linode you have permission to modify. If any actions are currently running or queued, those actions must be completed first before you can initiate a shutdown.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/linode/instances/{{$parameter[\"linodeId\"]}}/shutdown"
						}
					}
				},
				{
					"name": "Get Linode Stats",
					"value": "Get Linode Stats",
					"action": "Linode Statistics View",
					"description": "Returns CPU, IO, IPv4, and IPv6 statistics for your Linode for the past 24 hours.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/linode/instances/{{$parameter[\"linodeId\"]}}/stats"
						}
					}
				},
				{
					"name": "Get Linode Stats By Year Month",
					"value": "Get Linode Stats By Year Month",
					"action": "Statistics View (year/month)",
					"description": "Returns statistics for a specific month. The year/month values must be either a date in the past, or the current month. If the current month, statistics will be retrieved for the past 30 days.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/linode/instances/{{$parameter[\"linodeId\"]}}/stats/{{$parameter[\"year\"]}}/{{$parameter[\"month\"]}}"
						}
					}
				},
				{
					"name": "Get Linode Transfer",
					"value": "Get Linode Transfer",
					"action": "Network Transfer View",
					"description": "Returns a Linode's network transfer pool statistics for the current month.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/linode/instances/{{$parameter[\"linodeId\"]}}/transfer"
						}
					}
				},
				{
					"name": "Get Linode Transfer By Year Month",
					"value": "Get Linode Transfer By Year Month",
					"action": "Network Transfer View (year/month)",
					"description": "Returns a Linode's network transfer statistics for a specific month. The year/month values must be either a date in the past, or the current month.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/linode/instances/{{$parameter[\"linodeId\"]}}/transfer/{{$parameter[\"year\"]}}/{{$parameter[\"month\"]}}"
						}
					}
				},
				{
					"name": "Get Linode Volumes",
					"value": "Get Linode Volumes",
					"action": "Linode's Volumes List",
					"description": "View Block Storage Volumes attached to this Linode.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/linode/instances/{{$parameter[\"linodeId\"]}}/volumes"
						}
					}
				},
				{
					"name": "Get Kernels",
					"value": "Get Kernels",
					"action": "Kernels List",
					"description": "Lists available Kernels.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/linode/kernels"
						}
					}
				},
				{
					"name": "Get Kernel",
					"value": "Get Kernel",
					"action": "Kernel View",
					"description": "Returns information about a single Kernel.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/linode/kernels/{{$parameter[\"kernelId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /linode/instances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Get Linode Instances"
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
						"Linode Instances"
					],
					"operation": [
						"Get Linode Instances"
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
						"Linode Instances"
					],
					"operation": [
						"Get Linode Instances"
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
						"Linode Instances"
					],
					"operation": [
						"Get Linode Instances"
					]
				}
			}
		},
		{
			"displayName": "POST /linode/instances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Create Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "Backup ID",
			"name": "backup_id",
			"type": "number",
			"default": 1234,
			"description": "A Backup ID from another Linode's available backups. Your User must have\n`read_write` access to that Linode, the Backup must have a `status` of\n`successful`, and the Linode must be deployed to the same `region` as the Backup.\nSee [GET /linode/instances/{linodeId}/backups](/docs/api/linode-instances/#backups-list)\nfor a Linode's available backups.\n\nThis field and the `image` field are mutually exclusive.\n",
			"routing": {
				"send": {
					"property": "backup_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Create Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "Backups Enabled",
			"name": "backups_enabled",
			"type": "boolean",
			"default": true,
			"description": "If this field is set to `true`, the created Linode will automatically be\nenrolled in the Linode Backup service. This will incur an additional charge.\nThe cost for the Backup service is dependent on the Type of Linode deployed.\n\nThis option is always treated as `true` if the account-wide `backups_enabled`\nsetting is `true`.  See [account settings](/docs/api/account/#account-settings-view)\nfor more information.\n\nBackup pricing is included in the response from [/linodes/types](/docs/api/linode-types/#types-list)\n",
			"routing": {
				"send": {
					"property": "backups_enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Create Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "Group",
			"name": "group",
			"type": "string",
			"default": "Linode-Group",
			"description": "A deprecated property denoting a group label for this Linode.\n",
			"routing": {
				"send": {
					"property": "group",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Create Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "Interfaces",
			"name": "interfaces",
			"type": "json",
			"default": "[\n  {\n    \"ipam_address\": \"10.0.0.1/24\",\n    \"label\": \"example-interface\",\n    \"purpose\": \"vlan\"\n  }\n]",
			"description": "An array of Network Interfaces to add to this Linode's Configuration Profile.\n\nUp to three interface objects can be entered in this array. The position in the array determines the interface to which the settings apply:\n\n- First/0:  eth0\n- Second/1: eth1\n- Third/2:  eth2\n\nWhen updating a Linode's interfaces, *each interface must be redefined*. An empty interfaces array results in a default public interface configuration only.\n\nIf no public interface is configured, public IP addresses are still assigned to the Linode but will not be usable without manual configuration.\n\n**Note:** Changes to Linode interface configurations can be enabled by rebooting the Linode.\n\n**Note:** Only Next Generation Network (NGN) data centers support VLANs. Use the Regions ([/regions](/docs/api/regions/)) endpoint to view the capabilities of data center regions.\nIf a VLAN is attached to your Linode and you attempt to migrate or clone it to a non-NGN data center,\nthe migration or cloning will not initiate. If a Linode cannot be migrated because of an incompatibility,\nyou will be prompted to select a different data center or contact support.\n\n**Note:** See the [VLANs Overview](/docs/products/networking/vlans/#technical-specifications) guide to view additional specifications and limitations.\n",
			"routing": {
				"send": {
					"property": "interfaces",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Create Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "Label",
			"name": "label",
			"type": "string",
			"default": "linode123",
			"description": "The Linode's label is for display purposes only. If no label is provided for a Linode,\na default will be assigned.\n\nLinode labels have the following constraints:\n\n  * Must begin and end with an alphanumeric character.\n  * May only consist of alphanumeric characters, dashes (`-`), underscores (`_`) or periods (`.`).\n  * Cannot have two dashes (`--`), underscores (`__`) or periods (`..`) in a row.\n",
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
						"Linode Instances"
					],
					"operation": [
						"Create Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "Private Ip",
			"name": "private_ip",
			"type": "boolean",
			"default": true,
			"description": "If true, the created Linode will have private networking enabled and assigned a private IPv4 address.\n",
			"routing": {
				"send": {
					"property": "private_ip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Create Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "Region",
			"name": "region",
			"type": "string",
			"default": "us-east",
			"description": "The [Region](/docs/api/regions/#regions-list) where the Linode will be located.\n",
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
						"Linode Instances"
					],
					"operation": [
						"Create Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "Swap Size",
			"name": "swap_size",
			"type": "number",
			"default": 512,
			"description": "When deploying from an Image, this field is optional, otherwise it is ignored. This is used to set the swap disk size for the newly-created Linode.\n",
			"routing": {
				"send": {
					"property": "swap_size",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Create Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  \"example tag\",\n  \"another example\"\n]",
			"description": "An array of tags applied to this object.  Tags are for organizational purposes only.\n",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Create Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "string",
			"default": "g6-standard-2",
			"description": "The [Linode Type](/docs/api/linode-types/#types-list) of the Linode you are creating.\n",
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
						"Linode Instances"
					],
					"operation": [
						"Create Linode Instance"
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
						"Linode Instances"
					],
					"operation": [
						"Create Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "DELETE /linode/instances/{linodeId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Delete Linode Instance"
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
						"Linode Instances"
					],
					"operation": [
						"Delete Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "GET /linode/instances/{linodeId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Get Linode Instance"
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
						"Linode Instances"
					],
					"operation": [
						"Get Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "PUT /linode/instances/{linodeId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Update Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "Alerts",
			"name": "alerts",
			"type": "json",
			"default": "{\n  \"cpu\": 180,\n  \"io\": 10000,\n  \"network_in\": 10,\n  \"network_out\": 10,\n  \"transfer_quota\": 80\n}",
			"routing": {
				"send": {
					"property": "alerts",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Update Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "Backups",
			"name": "backups",
			"type": "json",
			"default": "{\n  \"available\": true,\n  \"enabled\": true,\n  \"last_successful\": \"2018-01-01T00:01:01\",\n  \"schedule\": {\n    \"day\": \"Saturday\",\n    \"window\": \"W22\"\n  }\n}",
			"description": "Information about this Linode's backups status. For information about available backups, see [/linode/instances/{linodeId}/backups](/docs/api/linode-instances/#backups-list).\n",
			"routing": {
				"send": {
					"property": "backups",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Update Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "Created",
			"name": "created",
			"type": "string",
			"default": "2018-01-01T00:01:01",
			"description": "When this Linode was created.",
			"routing": {
				"send": {
					"property": "created",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Update Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "Group",
			"name": "group",
			"type": "string",
			"default": "Linode-Group",
			"description": "A deprecated property denoting a group label for this Linode.\n",
			"routing": {
				"send": {
					"property": "group",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Update Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "Host Uuid",
			"name": "host_uuid",
			"type": "string",
			"default": "3a3ddd59d9a78bb8de041391075df44de62bfec8",
			"description": "The Linode's host machine, as a UUID.",
			"routing": {
				"send": {
					"property": "host_uuid",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Update Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "Hypervisor",
			"name": "hypervisor",
			"type": "options",
			"default": "kvm",
			"description": "The virtualization software powering this Linode.\n",
			"options": [
				{
					"name": "Kvm",
					"value": "kvm"
				}
			],
			"routing": {
				"send": {
					"property": "hypervisor",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Update Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "number",
			"default": 123,
			"description": "This Linode's ID which must be provided for all operations impacting this Linode.\n",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Update Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "Image",
			"name": "image",
			"type": "string",
			"default": "linode/debian9",
			"description": "An Image ID to deploy the Linode Disk from.\n\nAccess the Images List ([GET /images](/docs/api/images/#images-list)) endpoint with authentication to view\nall available Images. Official Linode Images start with `linode/`, while your Account's Images start with `private/`. Creating\na disk from a Private Image requires `read_only` or `read_write` permissions for that Image. Access the User's\nGrant Update ([PUT /account/users/{username}/grants](/docs/api/account/#users-grants-update)) endpoint to\nadjust permissions for an Account Image.\n",
			"routing": {
				"send": {
					"property": "image",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Update Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "Ipv 4",
			"name": "ipv4",
			"type": "json",
			"default": "[\n  \"203.0.113.1\",\n  \"192.0.2.1\"\n]",
			"description": "This Linode's IPv4 Addresses. Each Linode is assigned a single public IPv4 address\nupon creation, and may get a single private IPv4 address if needed. You may need to\n[open a support ticket](/docs/api/support/#support-ticket-open)\nto get additional IPv4 addresses.\n\nIPv4 addresses may be reassigned between your Linodes, or shared with other Linodes.\nSee the [/networking](/docs/api/networking/) endpoints for details.\n",
			"routing": {
				"send": {
					"property": "ipv4",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Update Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "Ipv 6",
			"name": "ipv6",
			"type": "string",
			"default": "c001:d00d::1337/128",
			"description": "This Linode's IPv6 SLAAC address. This address is specific to a Linode, and may not be shared. If the Linode has not been assigned an IPv6 address, the return value will be `null`.\n",
			"routing": {
				"send": {
					"property": "ipv6",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Update Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "Label",
			"name": "label",
			"type": "string",
			"default": "linode123",
			"description": "The Linode's label is for display purposes only. If no label is provided for a Linode,\na default will be assigned.\n\nLinode labels have the following constraints:\n\n  * Must begin and end with an alphanumeric character.\n  * May only consist of alphanumeric characters, dashes (`-`), underscores (`_`) or periods (`.`).\n  * Cannot have two dashes (`--`), underscores (`__`) or periods (`..`) in a row.\n",
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
						"Linode Instances"
					],
					"operation": [
						"Update Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "Region",
			"name": "region",
			"type": "string",
			"default": "us-east",
			"description": "This is the [Region](/docs/api/regions/#regions-list) where the Linode was deployed. A Linode's region can only be changed by initiating a [cross data center migration](/docs/api/linode-instances/#dc-migrationpending-host-migration-initiate).\n",
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
						"Linode Instances"
					],
					"operation": [
						"Update Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "Specs",
			"name": "specs",
			"type": "json",
			"default": "{\n  \"disk\": 81920,\n  \"memory\": 4096,\n  \"transfer\": 4000,\n  \"vcpus\": 2\n}",
			"description": "Information about the resources available to this Linode.",
			"routing": {
				"send": {
					"property": "specs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Update Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "running",
			"description": "A brief description of this Linode's current state. This field may change without direct action from you. For example, when a Linode goes into maintenance mode its status will display \"stopped\".\n",
			"options": [
				{
					"name": "Running",
					"value": "running"
				},
				{
					"name": "Offline",
					"value": "offline"
				},
				{
					"name": "Booting",
					"value": "booting"
				},
				{
					"name": "Rebooting",
					"value": "rebooting"
				},
				{
					"name": "Shutting Down",
					"value": "shutting_down"
				},
				{
					"name": "Provisioning",
					"value": "provisioning"
				},
				{
					"name": "Deleting",
					"value": "deleting"
				},
				{
					"name": "Migrating",
					"value": "migrating"
				},
				{
					"name": "Rebuilding",
					"value": "rebuilding"
				},
				{
					"name": "Cloning",
					"value": "cloning"
				},
				{
					"name": "Restoring",
					"value": "restoring"
				},
				{
					"name": "Stopped",
					"value": "stopped"
				}
			],
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Update Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  \"example tag\",\n  \"another example\"\n]",
			"description": "An array of tags applied to this object.  Tags are for organizational purposes only.\n",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Update Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "string",
			"default": "g6-standard-1",
			"description": "This is the [Linode Type](/docs/api/linode-types/#types-list) that this Linode was deployed with.\nTo change a Linode's Type, use [POST /linode/instances/{linodeId}/resize](/docs/api/linode-instances/#linode-resize).\n",
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
						"Linode Instances"
					],
					"operation": [
						"Update Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "Updated",
			"name": "updated",
			"type": "string",
			"default": "2018-01-01T00:01:01",
			"description": "When this Linode was last updated.",
			"routing": {
				"send": {
					"property": "updated",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Update Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "Watchdog Enabled",
			"name": "watchdog_enabled",
			"type": "boolean",
			"default": true,
			"description": "The watchdog, named Lassie, is a Shutdown Watchdog that monitors your Linode and will reboot it if it powers off unexpectedly. It works by issuing a boot job when your Linode powers off without a shutdown job being responsible.\nTo prevent a loop, Lassie will give up if there have been more than 5 boot jobs issued within 15 minutes.\n",
			"routing": {
				"send": {
					"property": "watchdog_enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Update Linode Instance"
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
						"Linode Instances"
					],
					"operation": [
						"Update Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "GET /linode/instances/{linodeId}/backups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Get Backups"
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
						"Linode Instances"
					],
					"operation": [
						"Get Backups"
					]
				}
			}
		},
		{
			"displayName": "POST /linode/instances/{linodeId}/backups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Create Snapshot"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Label",
			"name": "label",
			"type": "string",
			"default": "SnapshotLabel",
			"description": "The label for the new snapshot.",
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
						"Linode Instances"
					],
					"operation": [
						"Create Snapshot"
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
						"Linode Instances"
					],
					"operation": [
						"Create Snapshot"
					]
				}
			}
		},
		{
			"displayName": "POST /linode/instances/{linodeId}/backups/cancel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Cancel Backups"
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
						"Linode Instances"
					],
					"operation": [
						"Cancel Backups"
					]
				}
			}
		},
		{
			"displayName": "POST /linode/instances/{linodeId}/backups/enable",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Enable Backups"
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
						"Linode Instances"
					],
					"operation": [
						"Enable Backups"
					]
				}
			}
		},
		{
			"displayName": "GET /linode/instances/{linodeId}/backups/{backupId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Get Backup"
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
						"Linode Instances"
					],
					"operation": [
						"Get Backup"
					]
				}
			}
		},
		{
			"displayName": "POST /linode/instances/{linodeId}/backups/{backupId}/restore",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Restore Backup"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Linode ID",
			"name": "linode_id",
			"type": "number",
			"default": 234,
			"description": "The ID of the Linode to restore a Backup to.\n",
			"routing": {
				"send": {
					"property": "linode_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Restore Backup"
					]
				}
			}
		},
		{
			"displayName": "Overwrite",
			"name": "overwrite",
			"type": "boolean",
			"default": true,
			"description": "If True, deletes all Disks and Configs on the target Linode\nbefore restoring.\n\nIf False, and the Disk image size is larger than the available\nspace on the Linode, an error message indicating insufficient\nspace is returned.\n",
			"routing": {
				"send": {
					"property": "overwrite",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Restore Backup"
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
						"Linode Instances"
					],
					"operation": [
						"Restore Backup"
					]
				}
			}
		},
		{
			"displayName": "POST /linode/instances/{linodeId}/boot",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Boot Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "Config ID",
			"name": "config_id",
			"type": "number",
			"default": null,
			"description": "The Linode Config ID to boot into.\n",
			"routing": {
				"send": {
					"property": "config_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Boot Linode Instance"
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
						"Linode Instances"
					],
					"operation": [
						"Boot Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "POST /linode/instances/{linodeId}/clone",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Clone Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "Backups Enabled",
			"name": "backups_enabled",
			"type": "boolean",
			"default": true,
			"description": "If this field is set to `true`, the created Linode will\nautomatically be enrolled in the Linode Backup service. This\nwill incur an additional charge. Pricing is included in the\nresponse from\n[/linodes/types](/docs/api/linode-types/#types-list).\n\n* Can only be included when cloning to a new Linode.\n",
			"routing": {
				"send": {
					"property": "backups_enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Clone Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "Configs",
			"name": "configs",
			"type": "json",
			"default": "[\n  23456\n]",
			"description": "An array of configuration profile IDs.\n* If the `configs` parameter **is not provided**, then **all configuration profiles and their associated disks will be cloned** from the source Linode. Any disks specified by the `disks` parameter will also be cloned.\n* **If an empty array is provided** for the `configs` parameter, then **no configuration profiles (nor their associated disks) will be cloned** from the source Linode. Any disks specified by the `disks` parameter will still be cloned.\n* **If a non-empty array is provided** for the `configs` parameter, then **the configuration profiles specified in the array (and their associated disks) will be cloned** from the source Linode. Any disks specified by the `disks` parameter will also be cloned.\n",
			"routing": {
				"send": {
					"property": "configs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Clone Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "Disks",
			"name": "disks",
			"type": "json",
			"default": "[\n  25674\n]",
			"description": "An array of disk IDs.\n* If the `disks` parameter **is not provided**, then **no extra disks will be cloned** from the source Linode. All disks associated with the configuration profiles specified by the `configs` parameter will still be cloned.\n* **If an empty array is provided** for the `disks` parameter, then **no extra disks will be cloned** from the source Linode. All disks associated with the configuration profiles specified by the `configs` parameter will still be cloned.\n* **If a non-empty array is provided** for the `disks` parameter, then **the disks specified in the array will be cloned** from the source Linode, in addition to any disks associated with the configuration profiles specified by the `configs` parameter.\n",
			"routing": {
				"send": {
					"property": "disks",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Clone Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "Group",
			"name": "group",
			"type": "string",
			"default": "Linode-Group",
			"description": "A label used to group Linodes for display. Linodes are not required to have a group.\n",
			"routing": {
				"send": {
					"property": "group",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Clone Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "Label",
			"name": "label",
			"type": "string",
			"default": "cloned-linode",
			"description": "The label to assign this Linode when cloning to a new Linode.\n* Can only be provided when cloning to a new Linode.\n* Defaults to \"linode\".\n",
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
						"Linode Instances"
					],
					"operation": [
						"Clone Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "Linode ID",
			"name": "linode_id",
			"type": "number",
			"default": 124,
			"description": "If an existing Linode is the target for the clone, the ID of that Linode. The existing Linode must have enough resources to accept the clone.\n",
			"routing": {
				"send": {
					"property": "linode_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Clone Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "Private Ip",
			"name": "private_ip",
			"type": "boolean",
			"default": true,
			"description": "If true, the created Linode will have private networking enabled and assigned a private IPv4 address.\n* Can only be provided when cloning to a new Linode.\n",
			"routing": {
				"send": {
					"property": "private_ip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Clone Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "Region",
			"name": "region",
			"type": "string",
			"default": "us-east",
			"description": "This is the Region where the Linode will be deployed.\nTo view all available Regions you can deploy to see [/regions](/docs/api/regions/#regions-list).\n* Region can only be provided and is required when cloning to a new Linode.\n",
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
						"Linode Instances"
					],
					"operation": [
						"Clone Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "string",
			"default": "g6-standard-2",
			"description": "A Linode's Type determines what resources are available to\nit, including disk space, memory, and virtual cpus. The\namounts available to a specific Linode are returned as\n`specs` on the Linode object.\n\nTo view all available Linode Types you can deploy with\nsee [/linode/types](/docs/api/linode-types/#types-list).\n\n* Type can only be provided and is required when cloning to a new Linode.\n",
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
						"Linode Instances"
					],
					"operation": [
						"Clone Linode Instance"
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
						"Linode Instances"
					],
					"operation": [
						"Clone Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "GET /linode/instances/{linodeId}/configs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Get Linode Configs"
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
						"Linode Instances"
					],
					"operation": [
						"Get Linode Configs"
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
						"Linode Instances"
					],
					"operation": [
						"Get Linode Configs"
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
						"Linode Instances"
					],
					"operation": [
						"Get Linode Configs"
					]
				}
			}
		},
		{
			"displayName": "POST /linode/instances/{linodeId}/configs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Add Linode Config"
					]
				}
			}
		},
		{
			"displayName": "Comments",
			"name": "comments",
			"type": "string",
			"default": "This is my main Config",
			"description": "Optional field for arbitrary User comments on this Config.",
			"routing": {
				"send": {
					"property": "comments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Add Linode Config"
					]
				}
			}
		},
		{
			"displayName": "Devices",
			"name": "devices",
			"type": "json",
			"default": "{\n  \"sda\": {\n    \"disk_id\": 124458,\n    \"volume_id\": null\n  },\n  \"sdb\": {},\n  \"sdc\": {},\n  \"sdd\": {},\n  \"sde\": {},\n  \"sdf\": {},\n  \"sdg\": {},\n  \"sdh\": {}\n}",
			"description": "A dictionary of device disks to use as a device map in a Linode's configuration profile.\n* An empty device disk dictionary or a dictionary with empty values for device slots is allowed.\n* If no devices are specified, booting from this configuration will hold until a device exists that allows the boot process to start.\n",
			"routing": {
				"send": {
					"property": "devices",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Add Linode Config"
					]
				}
			}
		},
		{
			"displayName": "Helpers",
			"name": "helpers",
			"type": "json",
			"default": "{\n  \"devtmpfs_automount\": false,\n  \"distro\": true,\n  \"modules_dep\": true,\n  \"network\": true,\n  \"updatedb_disabled\": true\n}",
			"description": "Helpers enabled when booting to this Linode Config.",
			"routing": {
				"send": {
					"property": "helpers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Add Linode Config"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "number",
			"default": 23456,
			"description": "The ID of this Config.",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Add Linode Config"
					]
				}
			}
		},
		{
			"displayName": "Interfaces",
			"name": "interfaces",
			"type": "json",
			"default": "[\n  {\n    \"ipam_address\": \"10.0.0.1/24\",\n    \"label\": \"example-interface\",\n    \"purpose\": \"vlan\"\n  }\n]",
			"description": "An array of Network Interfaces to add to this Linode's Configuration Profile.\n\nUp to three interface objects can be entered in this array. The position in the array determines the interface to which the settings apply:\n\n- First/0:  eth0\n- Second/1: eth1\n- Third/2:  eth2\n\nWhen updating a Linode's interfaces, *each interface must be redefined*. An empty interfaces array results in a default public interface configuration only.\n\nIf no public interface is configured, public IP addresses are still assigned to the Linode but will not be usable without manual configuration.\n\n**Note:** Changes to Linode interface configurations can be enabled by rebooting the Linode.\n\n**Note:** Only Next Generation Network (NGN) data centers support VLANs. Use the Regions ([/regions](/docs/api/regions/)) endpoint to view the capabilities of data center regions.\nIf a VLAN is attached to your Linode and you attempt to migrate or clone it to a non-NGN data center,\nthe migration or cloning will not initiate. If a Linode cannot be migrated because of an incompatibility,\nyou will be prompted to select a different data center or contact support.\n\n**Note:** See the [VLANs Overview](/docs/products/networking/vlans/#technical-specifications) guide to view additional specifications and limitations.\n",
			"routing": {
				"send": {
					"property": "interfaces",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Add Linode Config"
					]
				}
			}
		},
		{
			"displayName": "Kernel",
			"name": "kernel",
			"type": "string",
			"default": "linode/latest-64bit",
			"description": "A Kernel ID to boot a Linode with. Defaults to \"linode/latest-64bit\".",
			"routing": {
				"send": {
					"property": "kernel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Add Linode Config"
					]
				}
			}
		},
		{
			"displayName": "Label",
			"name": "label",
			"type": "string",
			"default": "My Config",
			"description": "The Config's label is for display purposes only.\n",
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
						"Linode Instances"
					],
					"operation": [
						"Add Linode Config"
					]
				}
			}
		},
		{
			"displayName": "Memory Limit",
			"name": "memory_limit",
			"type": "number",
			"default": 2048,
			"description": "Defaults to the total RAM of the Linode.\n",
			"routing": {
				"send": {
					"property": "memory_limit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Add Linode Config"
					]
				}
			}
		},
		{
			"displayName": "Root Device",
			"name": "root_device",
			"type": "string",
			"default": "/dev/sda",
			"description": "The root device to boot.\n* If no value or an invalid value is provided, root device will default to `/dev/sda`.\n* If the device specified at the root device location is not mounted, the Linode will not boot until a device is mounted.\n",
			"routing": {
				"send": {
					"property": "root_device",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Add Linode Config"
					]
				}
			}
		},
		{
			"displayName": "Run Level",
			"name": "run_level",
			"type": "options",
			"default": "default",
			"description": "Defines the state of your Linode after booting. Defaults to `default`.\n",
			"options": [
				{
					"name": "Default",
					"value": "default"
				},
				{
					"name": "Single",
					"value": "single"
				},
				{
					"name": "Binbash",
					"value": "binbash"
				}
			],
			"routing": {
				"send": {
					"property": "run_level",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Add Linode Config"
					]
				}
			}
		},
		{
			"displayName": "Virt Mode",
			"name": "virt_mode",
			"type": "options",
			"default": "paravirt",
			"description": "Controls the virtualization mode. Defaults to `paravirt`.\n* `paravirt` is suitable for most cases. Linodes running in paravirt mode\n  share some qualities with the host, ultimately making it run faster since\n  there is less transition between it and the host.\n* `fullvirt` affords more customization, but is slower because 100% of the VM\n  is virtualized.\n",
			"options": [
				{
					"name": "Paravirt",
					"value": "paravirt"
				},
				{
					"name": "Fullvirt",
					"value": "fullvirt"
				}
			],
			"routing": {
				"send": {
					"property": "virt_mode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Add Linode Config"
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
						"Linode Instances"
					],
					"operation": [
						"Add Linode Config"
					]
				}
			}
		},
		{
			"displayName": "DELETE /linode/instances/{linodeId}/configs/{configId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Delete Linode Config"
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
						"Linode Instances"
					],
					"operation": [
						"Delete Linode Config"
					]
				}
			}
		},
		{
			"displayName": "GET /linode/instances/{linodeId}/configs/{configId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Get Linode Config"
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
						"Linode Instances"
					],
					"operation": [
						"Get Linode Config"
					]
				}
			}
		},
		{
			"displayName": "PUT /linode/instances/{linodeId}/configs/{configId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Update Linode Config"
					]
				}
			}
		},
		{
			"displayName": "Comments",
			"name": "comments",
			"type": "string",
			"default": "This is my main Config",
			"description": "Optional field for arbitrary User comments on this Config.",
			"routing": {
				"send": {
					"property": "comments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Update Linode Config"
					]
				}
			}
		},
		{
			"displayName": "Devices",
			"name": "devices",
			"type": "json",
			"default": "{\n  \"sda\": {\n    \"disk_id\": 124458,\n    \"volume_id\": null\n  },\n  \"sdb\": {},\n  \"sdc\": {},\n  \"sdd\": {},\n  \"sde\": {},\n  \"sdf\": {},\n  \"sdg\": {},\n  \"sdh\": {}\n}",
			"description": "A dictionary of device disks to use as a device map in a Linode's configuration profile.\n* An empty device disk dictionary or a dictionary with empty values for device slots is allowed.\n* If no devices are specified, booting from this configuration will hold until a device exists that allows the boot process to start.\n",
			"routing": {
				"send": {
					"property": "devices",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Update Linode Config"
					]
				}
			}
		},
		{
			"displayName": "Helpers",
			"name": "helpers",
			"type": "json",
			"default": "{\n  \"devtmpfs_automount\": false,\n  \"distro\": true,\n  \"modules_dep\": true,\n  \"network\": true,\n  \"updatedb_disabled\": true\n}",
			"description": "Helpers enabled when booting to this Linode Config.",
			"routing": {
				"send": {
					"property": "helpers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Update Linode Config"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "number",
			"default": 23456,
			"description": "The ID of this Config.",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Update Linode Config"
					]
				}
			}
		},
		{
			"displayName": "Interfaces",
			"name": "interfaces",
			"type": "json",
			"default": "[\n  {\n    \"ipam_address\": \"10.0.0.1/24\",\n    \"label\": \"example-interface\",\n    \"purpose\": \"vlan\"\n  }\n]",
			"description": "An array of Network Interfaces to add to this Linode's Configuration Profile.\n\nUp to three interface objects can be entered in this array. The position in the array determines the interface to which the settings apply:\n\n- First/0:  eth0\n- Second/1: eth1\n- Third/2:  eth2\n\nWhen updating a Linode's interfaces, *each interface must be redefined*. An empty interfaces array results in a default public interface configuration only.\n\nIf no public interface is configured, public IP addresses are still assigned to the Linode but will not be usable without manual configuration.\n\n**Note:** Changes to Linode interface configurations can be enabled by rebooting the Linode.\n\n**Note:** Only Next Generation Network (NGN) data centers support VLANs. Use the Regions ([/regions](/docs/api/regions/)) endpoint to view the capabilities of data center regions.\nIf a VLAN is attached to your Linode and you attempt to migrate or clone it to a non-NGN data center,\nthe migration or cloning will not initiate. If a Linode cannot be migrated because of an incompatibility,\nyou will be prompted to select a different data center or contact support.\n\n**Note:** See the [VLANs Overview](/docs/products/networking/vlans/#technical-specifications) guide to view additional specifications and limitations.\n",
			"routing": {
				"send": {
					"property": "interfaces",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Update Linode Config"
					]
				}
			}
		},
		{
			"displayName": "Kernel",
			"name": "kernel",
			"type": "string",
			"default": "linode/latest-64bit",
			"description": "A Kernel ID to boot a Linode with. Defaults to \"linode/latest-64bit\".",
			"routing": {
				"send": {
					"property": "kernel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Update Linode Config"
					]
				}
			}
		},
		{
			"displayName": "Label",
			"name": "label",
			"type": "string",
			"default": "My Config",
			"description": "The Config's label is for display purposes only.\n",
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
						"Linode Instances"
					],
					"operation": [
						"Update Linode Config"
					]
				}
			}
		},
		{
			"displayName": "Memory Limit",
			"name": "memory_limit",
			"type": "number",
			"default": 2048,
			"description": "Defaults to the total RAM of the Linode.\n",
			"routing": {
				"send": {
					"property": "memory_limit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Update Linode Config"
					]
				}
			}
		},
		{
			"displayName": "Root Device",
			"name": "root_device",
			"type": "string",
			"default": "/dev/sda",
			"description": "The root device to boot.\n* If no value or an invalid value is provided, root device will default to `/dev/sda`.\n* If the device specified at the root device location is not mounted, the Linode will not boot until a device is mounted.\n",
			"routing": {
				"send": {
					"property": "root_device",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Update Linode Config"
					]
				}
			}
		},
		{
			"displayName": "Run Level",
			"name": "run_level",
			"type": "options",
			"default": "default",
			"description": "Defines the state of your Linode after booting. Defaults to `default`.\n",
			"options": [
				{
					"name": "Default",
					"value": "default"
				},
				{
					"name": "Single",
					"value": "single"
				},
				{
					"name": "Binbash",
					"value": "binbash"
				}
			],
			"routing": {
				"send": {
					"property": "run_level",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Update Linode Config"
					]
				}
			}
		},
		{
			"displayName": "Virt Mode",
			"name": "virt_mode",
			"type": "options",
			"default": "paravirt",
			"description": "Controls the virtualization mode. Defaults to `paravirt`.\n* `paravirt` is suitable for most cases. Linodes running in paravirt mode\n  share some qualities with the host, ultimately making it run faster since\n  there is less transition between it and the host.\n* `fullvirt` affords more customization, but is slower because 100% of the VM\n  is virtualized.\n",
			"options": [
				{
					"name": "Paravirt",
					"value": "paravirt"
				},
				{
					"name": "Fullvirt",
					"value": "fullvirt"
				}
			],
			"routing": {
				"send": {
					"property": "virt_mode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Update Linode Config"
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
						"Linode Instances"
					],
					"operation": [
						"Update Linode Config"
					]
				}
			}
		},
		{
			"displayName": "GET /linode/instances/{linodeId}/disks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Get Linode Disks"
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
						"Linode Instances"
					],
					"operation": [
						"Get Linode Disks"
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
						"Linode Instances"
					],
					"operation": [
						"Get Linode Disks"
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
						"Linode Instances"
					],
					"operation": [
						"Get Linode Disks"
					]
				}
			}
		},
		{
			"displayName": "POST /linode/instances/{linodeId}/disks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Add Linode Disk"
					]
				}
			}
		},
		{
			"displayName": "Authorized Keys",
			"name": "authorized_keys",
			"type": "json",
			"default": "[\n  \"ssh-rsa AAAA_valid_public_ssh_key_123456785== user@their-computer\"\n]",
			"description": "A list of public SSH keys that will be automatically appended\nto the root user's `~/.ssh/authorized_keys` file when deploying from an Image.\n",
			"routing": {
				"send": {
					"property": "authorized_keys",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Add Linode Disk"
					]
				}
			}
		},
		{
			"displayName": "Authorized Users",
			"name": "authorized_users",
			"type": "json",
			"default": "[\n  \"myUser\",\n  \"secondaryUser\"\n]",
			"description": "A list of usernames. If the usernames have associated SSH keys, the keys will be appended to the root users `~/.ssh/authorized_keys` file automatically when deploying from an Image.\n",
			"routing": {
				"send": {
					"property": "authorized_users",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Add Linode Disk"
					]
				}
			}
		},
		{
			"displayName": "Filesystem",
			"name": "filesystem",
			"type": "options",
			"default": "ext4",
			"description": "The Disk filesystem can be one of:\n\n  * raw - No filesystem, just a raw binary stream.\n  * swap - Linux swap area.\n  * ext3 - The ext3 journaling filesystem for Linux.\n  * ext4 - The ext4 journaling filesystem for Linux.\n  * initrd - initrd (uncompressed initrd, ext2, max 32 MB).\n",
			"options": [
				{
					"name": "Raw",
					"value": "raw"
				},
				{
					"name": "Swap",
					"value": "swap"
				},
				{
					"name": "Ext 3",
					"value": "ext3"
				},
				{
					"name": "Ext 4",
					"value": "ext4"
				},
				{
					"name": "Initrd",
					"value": "initrd"
				}
			],
			"routing": {
				"send": {
					"property": "filesystem",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Add Linode Disk"
					]
				}
			}
		},
		{
			"displayName": "Image",
			"name": "image",
			"type": "string",
			"default": "linode/debian9",
			"description": "An Image ID to deploy the Linode Disk from.\n\nAccess the Images List ([GET /images](/docs/api/images/#images-list)) endpoint with authentication to view\nall available Images. Official Linode Images start with `linode/`, while your Account's Images start with `private/`. Creating\na disk from a Private Image requires `read_only` or `read_write` permissions for that Image. Access the User's\nGrant Update ([PUT /account/users/{username}/grants](/docs/api/account/#users-grants-update)) endpoint to\nadjust permissions for an Account Image.\n",
			"routing": {
				"send": {
					"property": "image",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Add Linode Disk"
					]
				}
			}
		},
		{
			"displayName": "Label",
			"name": "label",
			"type": "string",
			"default": "Debian 9 Disk",
			"description": "The Disk's label is for display purposes only.\n",
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
						"Linode Instances"
					],
					"operation": [
						"Add Linode Disk"
					]
				}
			}
		},
		{
			"displayName": "Root Pass",
			"name": "root_pass",
			"type": "string",
			"default": "aComplexP@ssword",
			"description": "This sets the root user's password on a newly-created Linode Disk when deploying from an Image.\n\n* **Required** when creating a Linode Disk from an Image, including when using a StackScript.\n\n* Must meet a password strength score requirement that is calculated internally by the API.\nIf the strength requirement is not met, you will receive a `Password does not meet strength requirement` error.\n",
			"routing": {
				"send": {
					"property": "root_pass",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Add Linode Disk"
					]
				}
			}
		},
		{
			"displayName": "Size",
			"name": "size",
			"type": "number",
			"default": 48640,
			"description": "The size of the Disk in MB.\n\nImages require a minimum size. Access the Image View ([GET /images/{imageID}](/docs/api/images/#image-view)) endpoint to view its size.\n",
			"routing": {
				"send": {
					"property": "size",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Add Linode Disk"
					]
				}
			}
		},
		{
			"displayName": "Stackscript Data",
			"name": "stackscript_data",
			"type": "json",
			"default": "{\n  \"gh_username\": \"linode\"\n}",
			"description": "This field is required only if the StackScript being deployed requires input data from the User for successful completion. See [User Defined Fields (UDFs)](/docs/guides/writing-scripts-for-use-with-linode-stackscripts-a-tutorial/#user-defined-fields-udfs) for more details.\n\nThis field is required to be valid JSON.\n\nTotal length cannot exceed 65,535 characters.\n",
			"routing": {
				"send": {
					"property": "stackscript_data",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Add Linode Disk"
					]
				}
			}
		},
		{
			"displayName": "Stackscript ID",
			"name": "stackscript_id",
			"type": "number",
			"default": 10079,
			"description": "A StackScript ID that will cause the referenced StackScript to be run during\ndeployment of this Linode. A compatible `image` is required to use a\nStackScript. To get a list of available StackScript and their permitted Images\nsee [/stackscripts](/docs/api/stackscripts/#stackscripts-list).\nThis field cannot be used when deploying from a Backup or a Private Image.\n",
			"routing": {
				"send": {
					"property": "stackscript_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Add Linode Disk"
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
						"Linode Instances"
					],
					"operation": [
						"Add Linode Disk"
					]
				}
			}
		},
		{
			"displayName": "DELETE /linode/instances/{linodeId}/disks/{diskId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Delete Disk"
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
						"Linode Instances"
					],
					"operation": [
						"Delete Disk"
					]
				}
			}
		},
		{
			"displayName": "GET /linode/instances/{linodeId}/disks/{diskId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Get Linode Disk"
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
						"Linode Instances"
					],
					"operation": [
						"Get Linode Disk"
					]
				}
			}
		},
		{
			"displayName": "PUT /linode/instances/{linodeId}/disks/{diskId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Update Disk"
					]
				}
			}
		},
		{
			"displayName": "Created",
			"name": "created",
			"type": "string",
			"default": "2018-01-01T00:01:01",
			"description": "When this Disk was created.",
			"routing": {
				"send": {
					"property": "created",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Update Disk"
					]
				}
			}
		},
		{
			"displayName": "Filesystem",
			"name": "filesystem",
			"type": "options",
			"default": "ext4",
			"description": "The Disk filesystem can be one of:\n\n  * raw - No filesystem, just a raw binary stream.\n  * swap - Linux swap area.\n  * ext3 - The ext3 journaling filesystem for Linux.\n  * ext4 - The ext4 journaling filesystem for Linux.\n  * initrd - initrd (uncompressed initrd, ext2, max 32 MB).\n",
			"options": [
				{
					"name": "Raw",
					"value": "raw"
				},
				{
					"name": "Swap",
					"value": "swap"
				},
				{
					"name": "Ext 3",
					"value": "ext3"
				},
				{
					"name": "Ext 4",
					"value": "ext4"
				},
				{
					"name": "Initrd",
					"value": "initrd"
				}
			],
			"routing": {
				"send": {
					"property": "filesystem",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Update Disk"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "number",
			"default": 25674,
			"description": "This Disk's ID which must be provided for all operations impacting this Disk.\n",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Update Disk"
					]
				}
			}
		},
		{
			"displayName": "Label",
			"name": "label",
			"type": "string",
			"default": "Debian 9 Disk",
			"description": "The Disk's label is for display purposes only.\n",
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
						"Linode Instances"
					],
					"operation": [
						"Update Disk"
					]
				}
			}
		},
		{
			"displayName": "Size",
			"name": "size",
			"type": "number",
			"default": 48640,
			"description": "The size of the Disk in MB.",
			"routing": {
				"send": {
					"property": "size",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Update Disk"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "ready",
			"description": "A brief description of this Disk's current state. This field may change without direct action from you, as a result of operations performed to the Disk or the Linode containing the Disk.\n",
			"options": [
				{
					"name": "Ready",
					"value": "ready"
				},
				{
					"name": "Not Ready",
					"value": "not ready"
				},
				{
					"name": "Deleting",
					"value": "deleting"
				}
			],
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Update Disk"
					]
				}
			}
		},
		{
			"displayName": "Updated",
			"name": "updated",
			"type": "string",
			"default": "2018-01-01T00:01:01",
			"description": "When this Disk was last updated.",
			"routing": {
				"send": {
					"property": "updated",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Update Disk"
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
						"Linode Instances"
					],
					"operation": [
						"Update Disk"
					]
				}
			}
		},
		{
			"displayName": "POST /linode/instances/{linodeId}/disks/{diskId}/clone",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Clone Linode Disk"
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
						"Linode Instances"
					],
					"operation": [
						"Clone Linode Disk"
					]
				}
			}
		},
		{
			"displayName": "POST /linode/instances/{linodeId}/disks/{diskId}/password",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Reset Disk Password"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Password",
			"name": "password",
			"type": "string",
			"default": "another@complex^Password123",
			"description": "The new root password for the OS installed on this Disk.\nThe password must meet the complexity strength validation requirements for a strong password.\n",
			"routing": {
				"send": {
					"property": "password",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Reset Disk Password"
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
						"Linode Instances"
					],
					"operation": [
						"Reset Disk Password"
					]
				}
			}
		},
		{
			"displayName": "POST /linode/instances/{linodeId}/disks/{diskId}/resize",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Resize Disk"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Size",
			"name": "size",
			"type": "number",
			"default": 2048,
			"description": "The desired size, in MB, of the disk.\n",
			"routing": {
				"send": {
					"property": "size",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Resize Disk"
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
						"Linode Instances"
					],
					"operation": [
						"Resize Disk"
					]
				}
			}
		},
		{
			"displayName": "GET /linode/instances/{linodeId}/firewalls",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Get Linode Firewalls"
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
						"Linode Instances"
					],
					"operation": [
						"Get Linode Firewalls"
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
						"Linode Instances"
					],
					"operation": [
						"Get Linode Firewalls"
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
						"Linode Instances"
					],
					"operation": [
						"Get Linode Firewalls"
					]
				}
			}
		},
		{
			"displayName": "GET /linode/instances/{linodeId}/ips",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Get Linode I Ps"
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
						"Linode Instances"
					],
					"operation": [
						"Get Linode I Ps"
					]
				}
			}
		},
		{
			"displayName": "POST /linode/instances/{linodeId}/ips",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Add Linode IP"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Public",
			"name": "public",
			"type": "boolean",
			"default": true,
			"description": "Whether to create a public or private IPv4 address.\n",
			"routing": {
				"send": {
					"property": "public",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Add Linode IP"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "ipv4",
			"description": "The type of address you are allocating. Only IPv4 addresses may be allocated through this endpoint.\n",
			"options": [
				{
					"name": "Ipv 4",
					"value": "ipv4"
				}
			],
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
						"Linode Instances"
					],
					"operation": [
						"Add Linode IP"
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
						"Linode Instances"
					],
					"operation": [
						"Add Linode IP"
					]
				}
			}
		},
		{
			"displayName": "DELETE /linode/instances/{linodeId}/ips/{address}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Remove Linode IP"
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
						"Linode Instances"
					],
					"operation": [
						"Remove Linode IP"
					]
				}
			}
		},
		{
			"displayName": "GET /linode/instances/{linodeId}/ips/{address}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Get Linode IP"
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
						"Linode Instances"
					],
					"operation": [
						"Get Linode IP"
					]
				}
			}
		},
		{
			"displayName": "PUT /linode/instances/{linodeId}/ips/{address}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Update Linode IP"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Rdns",
			"name": "rdns",
			"type": "string",
			"default": "test.example.org",
			"description": "The reverse DNS assigned to this address. For public IPv4 addresses, this will be set to a default value provided by Linode if not explicitly set.\n",
			"routing": {
				"send": {
					"property": "rdns",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Update Linode IP"
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
						"Linode Instances"
					],
					"operation": [
						"Update Linode IP"
					]
				}
			}
		},
		{
			"displayName": "POST /linode/instances/{linodeId}/migrate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Migrate Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "Region",
			"name": "region",
			"type": "string",
			"default": "us-east",
			"description": "The region to which the Linode will be migrated. Must be a valid region slug. A list of regions can be viewed by using the [GET /regions](/docs/api/regions/#regions-list) endpoint. A cross data center migration will cancel a pending migration that has not yet been initiated.\nA cross data center migration will initiate a `linode_migrate_datacenter_create` event.\n",
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
						"Linode Instances"
					],
					"operation": [
						"Migrate Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "Upgrade",
			"name": "upgrade",
			"type": "boolean",
			"default": false,
			"description": "When initiating a cross DC migration, setting this value to true will also ensure that the Linode is upgraded to the latest generation of hardware that corresponds to your Linode's Type, if any free upgrades are available for it.\nIf no free upgrades are available, and this value is set to true, then the endpoint will return a 400 error code and the migration will not be performed.\nIf the data center set in the `region` field does not allow upgrades, then the endpoint will return a 400 error code and the migration will not be performed.\n",
			"routing": {
				"send": {
					"property": "upgrade",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Migrate Linode Instance"
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
						"Linode Instances"
					],
					"operation": [
						"Migrate Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "POST /linode/instances/{linodeId}/mutate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Mutate Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "Allow Auto Disk Resize",
			"name": "allow_auto_disk_resize",
			"type": "boolean",
			"default": true,
			"description": "Automatically resize disks when resizing a Linode. When resizing down to a smaller plan your Linode's data must fit within the smaller disk size.\n",
			"routing": {
				"send": {
					"property": "allow_auto_disk_resize",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Mutate Linode Instance"
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
						"Linode Instances"
					],
					"operation": [
						"Mutate Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "GET /linode/instances/{linodeId}/nodebalancers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Get Linode Node Balancers"
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
						"Linode Instances"
					],
					"operation": [
						"Get Linode Node Balancers"
					]
				}
			}
		},
		{
			"displayName": "POST /linode/instances/{linodeId}/password",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Reset Linode Password"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Root Pass",
			"name": "root_pass",
			"type": "string",
			"default": "a$eCure4assw0rd!43v51",
			"description": "The root user's password on this Linode. Linode passwords must meet a password strength score requirement that is calculated internally by the API. If the strength requirement is not met, you will receive a Password does not meet strength requirement error.\n",
			"routing": {
				"send": {
					"property": "root_pass",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Reset Linode Password"
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
						"Linode Instances"
					],
					"operation": [
						"Reset Linode Password"
					]
				}
			}
		},
		{
			"displayName": "POST /linode/instances/{linodeId}/reboot",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Reboot Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "Config ID",
			"name": "config_id",
			"type": "number",
			"default": null,
			"description": "The Linode Config ID to reboot into.  If null or omitted, the last booted config will be used.  If there was no last booted config and this Linode only has one config, it will be used.  If a config cannot be determined, an error will be returned.\n",
			"routing": {
				"send": {
					"property": "config_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Reboot Linode Instance"
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
						"Linode Instances"
					],
					"operation": [
						"Reboot Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "POST /linode/instances/{linodeId}/rebuild",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Rebuild Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "Authorized Keys",
			"name": "authorized_keys",
			"type": "json",
			"default": "[\n  \"ssh-rsa AAAA_valid_public_ssh_key_123456785== user@their-computer\"\n]",
			"description": "A list of public SSH keys that will be automatically appended\nto the root user's `~/.ssh/authorized_keys` file when deploying from an Image.\n",
			"routing": {
				"send": {
					"property": "authorized_keys",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Rebuild Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "Authorized Users",
			"name": "authorized_users",
			"type": "json",
			"default": "[\n  \"myUser\",\n  \"secondaryUser\"\n]",
			"description": "A list of usernames. If the usernames have associated SSH keys, the keys will be appended to the root users `~/.ssh/authorized_keys` file automatically when deploying from an Image.\n",
			"routing": {
				"send": {
					"property": "authorized_users",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Rebuild Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "Booted",
			"name": "booted",
			"type": "boolean",
			"default": true,
			"description": "This field defaults to `true` if the Linode is created with an Image or from a Backup.\nIf it is deployed from an Image or a Backup and you wish it to remain `offline` after deployment, set this to `false`.\n",
			"routing": {
				"send": {
					"property": "booted",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Rebuild Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "Image",
			"name": "image",
			"type": "string",
			"default": "linode/debian9",
			"description": "An Image ID to deploy the Linode Disk from.\n\nAccess the Images List ([GET /images](/docs/api/images/#images-list)) endpoint with authentication to view\nall available Images. Official Linode Images start with `linode/`, while your Account's Images start with `private/`. Creating\na disk from a Private Image requires `read_only` or `read_write` permissions for that Image. Access the User's\nGrant Update ([PUT /account/users/{username}/grants](/docs/api/account/#users-grants-update)) endpoint to\nadjust permissions for an Account Image.\n",
			"routing": {
				"send": {
					"property": "image",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Rebuild Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "Root Pass",
			"name": "root_pass",
			"type": "string",
			"default": "aComplexP@ssword",
			"description": "This sets the root user's password on a newly-created Linode Disk when deploying from an Image.\n\n* **Required** when creating a Linode Disk from an Image, including when using a StackScript.\n\n* Must meet a password strength score requirement that is calculated internally by the API.\nIf the strength requirement is not met, you will receive a `Password does not meet strength requirement` error.\n",
			"routing": {
				"send": {
					"property": "root_pass",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Rebuild Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "Stackscript Data",
			"name": "stackscript_data",
			"type": "json",
			"default": "{\n  \"gh_username\": \"linode\"\n}",
			"description": "This field is required only if the StackScript being deployed requires input data from the User for successful completion. See [User Defined Fields (UDFs)](/docs/guides/writing-scripts-for-use-with-linode-stackscripts-a-tutorial/#user-defined-fields-udfs) for more details.\n\nThis field is required to be valid JSON.\n\nTotal length cannot exceed 65,535 characters.\n",
			"routing": {
				"send": {
					"property": "stackscript_data",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Rebuild Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "Stackscript ID",
			"name": "stackscript_id",
			"type": "number",
			"default": 10079,
			"description": "A StackScript ID that will cause the referenced StackScript to be run during\ndeployment of this Linode. A compatible `image` is required to use a\nStackScript. To get a list of available StackScript and their permitted Images\nsee [/stackscripts](/docs/api/stackscripts/#stackscripts-list).\nThis field cannot be used when deploying from a Backup or a Private Image.\n",
			"routing": {
				"send": {
					"property": "stackscript_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Rebuild Linode Instance"
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
						"Linode Instances"
					],
					"operation": [
						"Rebuild Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "POST /linode/instances/{linodeId}/rescue",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Rescue Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "Devices",
			"name": "devices",
			"type": "json",
			"default": "{\n  \"sda\": {\n    \"disk_id\": 124458,\n    \"volume_id\": null\n  },\n  \"sdb\": {},\n  \"sdc\": {},\n  \"sdd\": {},\n  \"sde\": {},\n  \"sdf\": {},\n  \"sdg\": {}\n}",
			"routing": {
				"send": {
					"property": "devices",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Rescue Linode Instance"
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
						"Linode Instances"
					],
					"operation": [
						"Rescue Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "POST /linode/instances/{linodeId}/resize",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Resize Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "Allow Auto Disk Resize",
			"name": "allow_auto_disk_resize",
			"type": "boolean",
			"default": true,
			"description": "Automatically resize disks when resizing a Linode. When resizing down to a smaller plan your Linode's data must fit within the smaller disk size.\n",
			"routing": {
				"send": {
					"property": "allow_auto_disk_resize",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Resize Linode Instance"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Type",
			"name": "type",
			"type": "string",
			"default": "g6-standard-2",
			"description": "The ID representing the Linode Type.",
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
						"Linode Instances"
					],
					"operation": [
						"Resize Linode Instance"
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
						"Linode Instances"
					],
					"operation": [
						"Resize Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "POST /linode/instances/{linodeId}/shutdown",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Shutdown Linode Instance"
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
						"Linode Instances"
					],
					"operation": [
						"Shutdown Linode Instance"
					]
				}
			}
		},
		{
			"displayName": "GET /linode/instances/{linodeId}/stats",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Get Linode Stats"
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
						"Linode Instances"
					],
					"operation": [
						"Get Linode Stats"
					]
				}
			}
		},
		{
			"displayName": "GET /linode/instances/{linodeId}/stats/{year}/{month}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Get Linode Stats By Year Month"
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
						"Linode Instances"
					],
					"operation": [
						"Get Linode Stats By Year Month"
					]
				}
			}
		},
		{
			"displayName": "GET /linode/instances/{linodeId}/transfer",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Get Linode Transfer"
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
						"Linode Instances"
					],
					"operation": [
						"Get Linode Transfer"
					]
				}
			}
		},
		{
			"displayName": "GET /linode/instances/{linodeId}/transfer/{year}/{month}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Get Linode Transfer By Year Month"
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
						"Linode Instances"
					],
					"operation": [
						"Get Linode Transfer By Year Month"
					]
				}
			}
		},
		{
			"displayName": "GET /linode/instances/{linodeId}/volumes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Get Linode Volumes"
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
						"Linode Instances"
					],
					"operation": [
						"Get Linode Volumes"
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
						"Linode Instances"
					],
					"operation": [
						"Get Linode Volumes"
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
						"Linode Instances"
					],
					"operation": [
						"Get Linode Volumes"
					]
				}
			}
		},
		{
			"displayName": "GET /linode/kernels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Get Kernels"
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
						"Linode Instances"
					],
					"operation": [
						"Get Kernels"
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
						"Linode Instances"
					],
					"operation": [
						"Get Kernels"
					]
				}
			}
		},
		{
			"displayName": "GET /linode/kernels/{kernelId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Instances"
					],
					"operation": [
						"Get Kernel"
					]
				}
			}
		},
];
